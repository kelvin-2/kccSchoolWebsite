import { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanityClient";

const PreviewPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type"); 
    const id = params.get("id");

    console.log("Preview params:", { type, id });

    if (!type || !id) {
      setError("Missing type or id parameter");
      setLoading(false);
      return;
    }

    let query = "";
    let documentType = "";

    switch (type) {
      case "hero":
        query = `*[_type == "heroSection" && _id == "${id}"][0]`;
        documentType = "heroSection";
        break;
      case "about":
        query = `*[_type == "aboutPage" && _id == "${id}"][0]`;
        documentType = "aboutPage";
        break;
      case "academic":
        query = `*[_type == "academicPage" && _id == "${id}"][0]`;
        documentType = "academicPage";
        break;
      default:
        setError(`Unknown preview type: ${type}`);
        setLoading(false);
        return;
    }

    console.log("Preview query:", query);

    client
      .fetch(query, {}, { perspective: "previewDrafts" })
      .then((result) => {
        console.log("Preview data:", result);
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Preview fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-6 text-lg">Loading preview...</p>;
  
  if (error) return (
    <div className="p-6">
      <p className="text-red-600">Error: {error}</p>
      <p className="text-gray-600 mt-2">Check console for more details</p>
    </div>
  );

  if (!data) return <p className="p-6 text-lg">No data found for preview</p>;

  // Render different layouts based on document type
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");

  if (type === "hero") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            {data.title && (
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to{" "}
                <span className="text-red-700">{data.title}</span>
              </h1>
            )}
            {data.subtitle && (
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                {data.subtitle}
              </p>
            )}
          </div>

          {/* Image */}
          {data.image ? (
            <img
              src={urlFor(data.image).url()}
              alt={data.title || "Hero image"}
              className="h-96 shadow-2xl mx-auto rounded-lg"
            />
          ) : (
            <div className="h-96 flex items-center justify-center bg-gray-200 rounded-lg shadow-2xl">
              <span className="text-gray-500">No Image Added</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default preview layout for other types
  return (
    <div className="p-8 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        {data.title && (
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h1>
        )}
        {data.subtitle && (
          <p className="text-lg text-gray-600 mb-6">{data.subtitle}</p>
        )}
        {data.content && (
          <div className="text-gray-700 leading-relaxed mb-6">
            {data.content}
          </div>
        )}
        {data.image && (
          <img
            src={urlFor(data.image).width(800).url()}
            alt="preview"
            className="rounded-xl shadow-lg w-full max-w-2xl mx-auto"
          />
        )}
        
        {/* Debug info */}
        <div className="mt-8 p-4 bg-gray-100 rounded text-sm text-gray-600">
          <p><strong>Document Type:</strong> {data._type}</p>
          <p><strong>Document ID:</strong> {data._id}</p>
          <p><strong>Preview Type:</strong> {type}</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
