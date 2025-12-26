const rules = [
  {
    number: "01",
    title: "Dedicated Account",
    description: "Participants must create a new Instagram account dedicated to the challenge.",
  },
  {
    number: "02",
    title: "Required Hashtag",
    description: "The hashtag #Violet_to_Red must be placed in the account bio.",
  },
  {
    number: "03",
    title: "Official Registration",
    description: "Participants must register on the official website and provide contact information.",
  },
  {
    number: "04",
    title: "Light Editing Only",
    description: "Only light photo editing is allowed (colors, contrast, basic filters).",
  },
  {
    number: "05",
    title: "No AI Allowed",
    description: "Artificial Intelligence is strictly prohibited in photo creation or editing.",
  },
  {
    number: "06",
    title: "No Human Subjects",
    description: "No people or human beings are allowed in the photos.",
  },
  {
    number: "07",
    title: "Original Work",
    description: "Photos must be original and taken by the participant.",
  },
];

const Rules = () => {
  return (
    <section id="rules" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Challenge <span className="text-gradient">Rules</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Follow these guidelines to participate in the Violet to Red challenge.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rules.map((rule) => (
            <div
              key={rule.number}
              className="group relative bg-background rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Rule Number */}
              <span className="absolute -top-3 left-6 px-3 py-1 bg-background border border-primary/30 rounded-full text-sm font-medium text-primary">
                {rule.number}
              </span>
              
              {/* Content */}
              <div className="pt-4">
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {rule.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {rule.description}
                </p>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-primary/0 via-primary/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rules;
