import { Brain, Clock, Target, Scissors, Leaf } from 'lucide-react';

const awarenessLenses = [
  {
    icon: Clock,
    title: 'The Labor Exchange',
    description:
      'We convert prices into the actual minutes of life spent earning that money. That $60 video game is not just a number; it may represent 5 hours of work. Is it worth the Tuesday afternoon you spent earning it?',
  },
  {
    icon: Target,
    title: 'The Opportunity Cost',
    description:
      'Each purchase is mapped to a North Star goal like a new MacBook or a post-grad trip. A $45 takeout order can mean your backpacking goal moves several days further away.',
  },
  {
    icon: Scissors,
    title: 'The Subscription Purge',
    description:
      'We surface forgotten recurring charges and quantify their annual cost. That $15/month service is $180 per year, with one-click cancellation to reclaim that freedom cost.',
  },
  {
    icon: Leaf,
    title: 'The Carbon Weight',
    description:
      'Using category-level emission factors, each transaction is tagged High, Medium, or Low carbon impact to make climate cost visible in everyday spending decisions.',
  },
];

const Hackathon = () => {
  return (
    <section id="hackathon" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-muted-foreground uppercase tracking-widest text-sm mb-4">
              Hackathon Build
            </p>
            <h2 className="section-title">
              TartanHacks <span className="text-gradient">2026</span>
            </h2>
          </div>

          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-start gap-3 mb-4">
              <Brain className="w-6 h-6 text-accent-orange mt-1" />
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                  BudgetBruh
                </h3>
                <p className="text-muted-foreground text-sm">
                  Built in 24 hours at Carnegie Mellon University with 300+ teams.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              What if your banking app stopped telling you &quot;No&quot; and started telling you
              &quot;Why?&quot; We built BudgetBruh to challenge shame-based budgeting and enable
              reflection-based behavior change. Instead of blocking spending, it reveals the real
              trade-offs hidden behind every transaction.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              BudgetBruh acts as a Reflection Engine that translates each purchase into meaningful
              context: time spent earning it, progress delayed on life goals, recurring cost leaks,
              and environmental footprint.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-4">
              Four Key Lenses of Awareness
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {awarenessLenses.map((lens) => (
                <div key={lens.title} className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-accent-orange/20 border border-accent-orange/30">
                      <lens.icon className="w-5 h-5 text-accent-orange" />
                    </div>
                    <h4 className="font-display text-lg font-semibold">{lens.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{lens.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-4">
              Hackathon Gallery
            </h3>
            {/* <p className="text-muted-foreground text-sm mb-4">
              Add your event photos in the <code>/public</code> folder using these names:
              <code> hackathon-1.jpg</code>, <code>hackathon-2.jpg</code>, <code>hackathon-3.jpg</code>.
            </p> */}
            <div className="grid md:grid-cols-3 gap-4">
              {['/hackathon-1.jpg', '/hackathon-2.jpg', '/hackathon-3.jpg'].map((imageSrc, idx) => (
                <div key={imageSrc} className="glass-card p-2">
                  <img
                    src={imageSrc}
                    alt={`TartanHacks 2026 photo ${idx + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
