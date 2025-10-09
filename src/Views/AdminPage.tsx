import { useState } from "react";
import ImageManager from "../Components/ImageManager.tsx";
import { toast } from "react-toastify";
import { useImages } from "../contexts/ImageContext";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const { images: currentImages, updateImage, resetImages } = useImages();

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = "mono-admin-2024"; // You can change this

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast.success("Welcome to Admin Panel!");
    } else {
      toast.error("Invalid password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    toast.info("Logged out successfully");
  };

  const handleResetImages = () => {
    if (
      window.confirm(
        "Are you sure you want to reset all images to default? This will remove all uploaded images."
      )
    ) {
      resetImages();
      toast.success("All images reset to default");
    }
  };

  const handleImageUpdate = (category: string, key: string, newUrl: string) => {
    updateImage(category as keyof typeof currentImages, key, newUrl);

    // Copy the new URL to clipboard for easy pasting into images.ts
    navigator.clipboard
      .writeText(newUrl)
      .then(() => {
        toast.success(
          `Image updated: ${category}.${key} - URL copied to clipboard!`
        );
      })
      .catch(() => {
        toast.success(`Image updated: ${category}.${key}`);
      });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-primary">
            Admin Login
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-primary">
              Image Management
            </h1>
            <div className="flex gap-2">
              <button
                onClick={handleResetImages}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
              >
                Reset All
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
          <p className="text-gray-600 mt-2">
            Manage your website images using Cloudinary upload widget
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ImageManager
            title="Logo Images"
            images={currentImages.logo}
            category="logo"
            onImageUpdate={handleImageUpdate}
          />

          <ImageManager
            title="Hero Section"
            images={currentImages.hero}
            category="hero"
            onImageUpdate={handleImageUpdate}
          />

          <ImageManager
            title="About Us"
            images={currentImages.aboutUs}
            category="aboutUs"
            onImageUpdate={handleImageUpdate}
          />

          <ImageManager
            title="Contact Us"
            images={currentImages.contactUs}
            category="contactUs"
            onImageUpdate={handleImageUpdate}
          />

          <ImageManager
            title="Service Cards"
            images={currentImages.services}
            category="services"
            onImageUpdate={handleImageUpdate}
          />

          <ImageManager
            title="Social Media Icons"
            images={currentImages.social}
            category="social"
            onImageUpdate={handleImageUpdate}
          />
        </div>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            ✅ Automatic Image Management:
          </h3>
          <ul className="text-green-700 space-y-1">
            <li>
              • Images are uploaded to Cloudinary and URLs are updated
              automatically
            </li>
            <li>
              • Changes are saved to browser storage and persist across sessions
            </li>
            <li>
              • No need to manually update code files - everything is automatic!
            </li>
            <li>
              • Use "Reset All" button to restore original images from images.ts
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
