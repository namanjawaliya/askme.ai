import { Button } from "@/components/ui/button";
import { BRAND_NAME } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <main className="flex-grow flex flex-col items-center p-24 text-center">
      <h2 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl capitalize">
        Summarize your <span className="text-blue-600">videos</span> in seconds.
      </h2>
      <p className="mt-5 max-w-prose text-muted-foreground sm:text-lg">
        {BRAND_NAME} enables instant interview summaries and interactive Q&A.
        Just upload your video and dive into comprehensive insights in seconds.
      </p>
      <div className="mt-5">
        <Button className="flex items-center gap-2">
          <span>Get Started</span>
          <ArrowRight size={20} />
        </Button>
      </div>
      <div>Image will be here</div>
      <div>
        <h2 className="max-w-4xl text-2xl md:text-3xl lg:text-4xl font-bold">
          It all starts with your information sources
        </h2>
        <p className="mt-2 max-w-prose text-muted-foreground sm:text-lg">
          Generate an AI assistant on top of your videos so you can quickly
          find, summarize and understand info. No more endless skimming.
        </p>
      </div>
    </main>
  );
};

export default Home;
