import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function FeaturesSection() {
  const features = [
  {
    title: "Add Photos of Your Memory",
    description:
      "Easily upload and organize your favorite memories with images. Capture the moment and keep it forever in your journal.",
    badge: "Images",
    image: "/images/features/photo-feature.jpg",
  },
  {
    title: "Rich Text Editor",
    description:
      "Enjoy a rich text editor that supports bold, italics, lists, and more. Personalize your entries with ease.",
    badge: "Editor",
    image: "/images/features/text-editor.jpg",
  },
  {
    title: "Audio Entries",
    description:
      "Record and upload audio files to capture your thoughts and memories. Perfect for times when typing isn't convenient.",
    badge: "Audio",
    image: "/images/features/audio.jpg",
  },
  {
    title: "Reminders",
    description:
      "Set reminders to journal regularly. Never miss an important moment or forget to record your daily reflections.",
    badge: "Notifications",
    image: "/images/features/reminder.jpg",
  },
  {
    title: "End-to-End Encryption",
    description:
      "Your privacy is our priority. Enjoy peace of mind with end-to-end encryption, ensuring your entries are secure and private.",
    badge: "Security",
    image: "/images/features/encryption.jpg",
  },
  {
    title: "Forums and Tips",
    description:
      "Join our community forums to share journaling tips, discuss best practices, and connect with other journal enthusiasts.",
    badge: "Community",
    image: "/images/features/forum.jpg",
  },
  {
    title: "Customizable Themes",
    description:
      "Personalize your journal with a variety of themes and colors. Make your journal as unique as your thoughts.",
    badge: "Customization",
    image: "/images/features/themes.jpg",
  },
  {
    title: "Search and Organization",
    description:
      "Easily search through your entries and organize them by tags or categories. Find past entries quickly and efficiently.",
    badge: "Productivity",
    image: "/images/features/search.jpg",
  },
  {
    title: "Interactive Elements",
    description:
      "Add interactive elements like checklists or goals to your entries. Track your progress and stay motivated.",
    badge: "Interactive",
    image: "/images/features/interactive-elements.jpeg",
  },
  {
    title: "User Diary Entries Stats",
    description:
      "Get insights into your journaling habits with detailed statistics on your entries. See how you’ve grown over time.",
    badge: "Analytics",
    image: "/images/features/stats.jpg",
  },
];


  return (
    <>
      <TracingBeam className="px-6">
        <div className="max-w-4xl mx-auto antialiased pt-4 relative">
          {features.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className={`flex flex-col md:flex-row items-center mb-10 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 p-4">
                <h2 className="bg-slate-800 text-slate-100 rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {feature.badge}
                </h2>

                <p className="text-2xl font-semibold mb-4">{feature.title}</p>

                <div className="text-sm prose prose-sm dark:prose-invert">
                  {feature.description}
                </div>
              </div>

              <div className="w-full md:w-1/2 p-4">
                <Image
                  src={feature.image}
                  alt={`${feature.title} image`}
                  width={500}
                  height={500}
                  className="rounded-lg mb-10 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}
