import { useState } from "react";

interface ImageManagerProps {
  title: string;
  images: Record<string, string>;
  category: string;
  onImageUpdate: (category: string, key: string, newUrl: string) => void;
}

export default function ImageManager({
  title,
  images,
  category,
  onImageUpdate,
}: ImageManagerProps) {
  const [uploading, setUploading] = useState<string | null>(null);

  const handleCloudinaryUpload = (key: string) => {
    setUploading(key);

    // Cloudinary upload widget configuration
    const cloudinaryWidget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: "dnrdf85ss", // Your cloud name
        uploadPreset: "ml_default", // You'll need to create this preset
        sources: ["local", "url", "camera"],
        multiple: false,
        cropping: true,
        croppingAspectRatio: 1.0,
        showAdvancedOptions: true,
        folder: "samples/Mono", // Your folder path
        tags: ["mono", "admin"],
        context: { alt: `${category}-${key}` },
      },
      (error: any, result: any) => {
        setUploading(null);
        if (error) {
          console.error("Upload error:", error);
          return;
        }

        if (result && result.event === "success") {
          const newUrl = result.info.secure_url;
          onImageUpdate(category, key, newUrl);
        }
      }
    );

    cloudinaryWidget.open();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-primary mb-4">{title}</h2>
      <div className="space-y-4">
        {Object.entries(images).map(([key, url]) => (
          <div key={key} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-700 capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <button
                onClick={() => handleCloudinaryUpload(key)}
                disabled={uploading === key}
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploading === key ? "Uploading..." : "Upload New"}
              </button>
            </div>

            <div className="space-y-2">
              <img
                src={url}
                alt={`${category}-${key}`}
                className="w-full h-32 object-cover rounded border"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=";
                }}
              />
              <div className="text-xs text-gray-500 break-all">{url}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
