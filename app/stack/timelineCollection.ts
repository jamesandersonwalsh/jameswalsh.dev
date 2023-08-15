import { TimelineCollection } from './types'

const TimelineCollection: TimelineCollection = {
  frontend: [
    {
      title: 'JavaScript',
      description: `I still find it incredible that the worlds most popular programming language had such humble
                    beginnings. Written in just 10 days by Brendan Eich, JS has gone on to dominate the web & grow in
                    popularity across the full tech stack. Writing JS has been the bread & butter of my own career
                    & my appreciation for it has grown as Ive contended with both it's good parts it's bad. I believe
                    that JS is at its best when written composability in mind, in a declarative way
                    (rather than & imperative). My favorite resources on JS are 'You Dont Know JS' & Professor
                    Frisby's Mostly Adequete Guide to Functional Programming.`,
      imageLink: '/logos/tech/javascript.png',
    },
    {
      title: 'Typescript',
      description: `There's a large caveat when I say "I'm a JavaScript developer". What I really mean to say is that
                    I am a Typescript Developer. I am a firm-believer that a carefully crafted strong type system
                    improves code quality, refactorability, readability, & your ability to underst& & fully
                    use modules developed by other teams of developers. I'm a strong advocate for compilers, good build
                    systems that perform static code analysis & detect isues before runtime. My favorite resource for
                    learning more about typescript is by going through Type Level Typescript by Gabriel Vergnaud.`,
      imageLink: '/logos/tech/typescript.png',
    },
    {
      title: 'Vue 3',
      description: `Written as a response to both Angular & React, Evan You created a web framework which strikes a
                    compelling balance between the strong opinions of Angular, & the expressiveness composability of
                    React. In my opinion, Vue has the best Single File Component specification of the 3 major frontend
                    frameworks, as well as the most pleasent developer experience I've ever had in a state
                    management library with pinia.`,
      imageLink: '/logos/tech/vue.png',
    },
    {
      title: 'React',
      description: `It is a long established fact that a reader will be
                  distracted by the readable content of a page when looking at
                  its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to
                  using 'Content here, content here', making it look like
                  readable English.`,
      imageLink: '/logos/tech/react.png',
    },
  ],
  backend: [
    {
      title: 'Next.js',
      description: `Full-stack React, Server Side Rendering, & an effective replacement to both tRPC & gRPC are what
                    make Next.js the most compelling full-stack technology framework for indie developers who want 
                    to get off the ground running with everything they need, but with the frontend cloud at the top
                    of their mind. Progressive enhancement, full compatibility with edge functions, fast load
                    times, & intelligent asset caching are all apart of my decision for choosing Next.js as my
                    go to starter stack. It should come as no surprise that this portfolio site is written using Next.js.
                    It keeps me productive. I cant say enough great things about it.`,
      imageLink: '/logos/tech/nextjs.png',
    },
    {
      title: 'Node.js / Express',
      description: `What can I say I just really like writing Javascript! No but seriously. Node.js + Express are an
                    amazing combo for folks who don't want the overhead of context switching between frontend & backend
                    work & want a lightweight batteries included mechanism to begin writing a network layer. During my
                    time at Pluralsight, much of years 2-4 were spent scaling 2 Node.js services to be able
                    to service high profile customers like JPMC, Chevron, AMEX, & more. Node.js never got in my way,
                    especially when paired with a sensible database abstraction behind it.`,
      imageLink: '/logos/tech/nodejs.png',
    },
    {
      title: 'C# / .NET Core',
      description: `Often referred to as the little brother to Java, C# & .NET have always been my favorite of the two
                    OOP twins. In my opinion C# has always offered the more compelling full stack proposition when it
                    comes to developer happiness, writing object oriented code concisely, & with flavors of lambda,
                    FP, & really magical type inferrence baked in. From Indie Game Development with Unity,
                    to universal applications with mono, C# holds your h& through crafting beautiful strongly typed
                    code. Admittedly, at the end of this romatic letter is the admission that If I were starting over
                    again today in .NET, I'd be tempted to pick up its functional counterpart, F#.`,
      imageLink: '/logos/tech/c-sharp.png',
    },
    {
      title: 'Ruby on Rails',
      description: `Ruby on Rails was the first technology stack I ever used professionally, & in hindsight I feel
                    particularly lucky that I got to use such an expressive, concise, productive, opinionated stack
                    as an associate engineer. While I look back on my time with Ruby romantically, thinking about how
                    quickly my entire team could spin up MVPs for CRUD applications with ease, I have to confess that
                    I do not miss ActiveRecord at all, nor the Model component in MVC.`,
      imageLink: '/logos/tech/rails.png',
    },
  ],
  databases: [
    {
      title: 'PostgreSQL',
      description: `Whether your storing your data as traditional SQL or JSON style NoSQL, normalized, de-normalized,
                    with key constraints, without key constraints, Postgres always has you covered. Postgres'
                    world-class flexibility make it the first querying language that I reach for on professional teams.`,
      imageLink: '/logos/tech/postgres.png',
    },
    {
      title: 'PlanetScale DB',
      description: `PlanetScale's highly competitive pricing, disruptive approach to git style database branching, &
                    generous free tier make it my go-to hosted db platform for all my indie dev side project
                    ideas. Migrations in PlanetScale are so easy to work with that it feels like the logical choice
                    for teams that want to iterate quickly, & don't know the exact data shape theyre working with 
                    at the start of a new project. Written on top of MySQL, & with first class support for popular
                    Node.js libraries like Prisma, Drizzle, & sequalize are icing on top.`,
      imageLink: '/logos/tech/planetscale-white.png',
    },
    {
      title: 'MySQL',
      description: `While Postgres has my heart, MySQL was the first database technology I ever used. MySQL powered my
                  early web development career refactoring code from the LAMP stack to Ruby on Rails. & it hasn't
                  slowed down either. MySQL remains one of my top database choices, & continues to power many of the
                  APIs I use both in my side projects & professionally. MySQL has earned its place as the obvious top 
                  contendor to PostgreSQL in OSS db popularity.`,
      imageLink: '/logos/tech/mysql.png',
    },
  ],
  eventing: [
    {
      title: 'RabbitMQ',
      description: `The 1st time I ever worked in a micro-services architecture much of my day was spent writing
                    subscribers & publishers to power the eventual consistency that would allow totally separate 
                    domains to talk to one another with grace. Rabbit is a no brainer, & a perfect fit with Node.js
                    which was fundamentally built on top of an 'event loop' architecture. My only complaint with
                    rabbit is that h&ling dead-lettering can be cumbersome & hard, which leads us to kafka.`,
      imageLink: '/logos/tech/rabbitmq.png',
    },
    {
      title: 'Apache Kafka',
      description: `Where RabbitMQ struggles, Kafka holds strong, but can take significantly more effort to setup &
                    get right. Kafka consumers can do what RabbitMQ consumers cannot in that they re-read history from
                    the beginning of time, getting you every event that was ever fired. The real time analytics
                    abilities from tools that are built on top of kafka are second to none, & powered
                    analytics dashboards I helped create in Scala during the 2020 global p&emic.`,
      imageLink: '/logos/tech/kafka.jpeg',
    },
    {
      title: 'AWS Simple Queue Service',
      description: `SQS is my favorite eventing platform for simple pub/sub architectures. While it feels less grown
                    up compared to its rabbit & kafka counterparts, its also more lightweight & by far the easiest
                    to get started with since its a 1st party hosted solution.`,
      imageLink: '/logos/tech/sqs.png',
    },
  ],
  devtools: [
    {
      title: 'VSCode',
      description: `If you're still not using VS Code yet, schedule some time with me. As a long time JetBrains
                    enthusiast, VS Code has everything I need with a fraction of the CPU & RAM cost & a better UX.
                    Neither full fledge IDE, nor simple text-editor, VS Code lets you be whatever you
                    configure it to be. There is real elegance in that. The cherry on top is that there is no better
                    remote pairing experience than the LiveShare offering from Microsoft. I highly recommend it for
                    distributed teams who want to occasionally pair & mob program.`,
      imageLink: '/logos/tech/vscode.png',
    },
    {
      title: 'Oh My ZSH',
      description: `Whether or not I'm on Mac, WSL, or Linux you can bet that I'm taking ZSH, along with all my custom
                    ZSH configurations, aliases, & plugins with me. ZSH is bash supercharged, & makes working out of the
                    terminal feel premium.`,
      imageLink: '/logos/tech/ohmyzsh.png',
    },
    {
      title: 'iTerm 2',
      description: `A great modern terminal that doesn't get in your way, doesnt track you with data analytics,
                    & doesn't require you to login. Its tried, true, & stable. Keep being you, iTerm.`,
      imageLink: '/logos/tech/iterm2.png',
    },
    {
      title: 'TablePlus',
      description: `Compatible with all major OSS querying languages, I love TablePlus for all the same reasons I love
                    VS Code. While its not a full fledge IDE like Data Grip, it helps me do what I need to do while
                    managing a minimal, simple user interface that really puts your SQL data front & center & gets
                    everything else out of your way.`,
      imageLink: '/logos/tech/tableplus.png',
    },
    {
      title: 'Insomnia',
      description: `Insomnia does its job really well, without layering on lots of extra pricey abstractions, bells,
                    & whistles like some of its competitors. A good network protocol tool gets you back into your
                    browser or editor as fast as possible, & that is insomnia at its core.`,
      imageLink: '/logos/tech/insomnia.png',
    },
  ],
  principles: [
    {
      title: 'Lean Development / Kanban with Linear',
      description: `Ive been an outspoken critic of the way that most implement agile. The agile manifesto
                    (which was written about 30 minutes up the road from my childhood home) is
                    only 4 short simple sentences. Yet its meaning largely appears to be lost as teams spend copious
                    amounts of time managing sAFE, SCRUM, & spending signficant energy managing how long something is
                    going to take, rather than spending time building customer value. Linear reduces waste, cuts
                    through the cruft, and is hands down the most powerful, simple, and fun project management
                    tool I've ever used.`,
      imageLink: '/logos/tech/linear-app-logo.jpeg',
    },
    {
      title: 'Atomic Design Principles',
      description: `Brad Frost is responsible for laying out principles by which I believe all great design systems
                    can be built upon for scale, cleanliness, & a stellar developer experience. 
                    Both on the design systems that I have had a h& in building, & design systems I choose to use,
                    I look for atomic layers of UI that can easily be structured into eventual full pages & layouts.
                    Thank you Brad!`,
      imageLink: '/logos/tech/atomic-design.png',
    },
    {
      title: 'Test-Driven Development',
      description: `TDD is a discipline I strive to practice with relative consistency in my own career as its led
                    to better overall code quality, helps me go faster, & most importantly helps me think through
                    features at the smallest level possible. I view the benefits of TDD to be largely at design & 
                    development time, in helping me think through the structure of my thoughts to deliver value.
                    Those returns diminish when the test is written second. TDD helps me figure out what code
                    I'm trying to write. When you've already written the code. the tests are only there to make sure
                    code that comes after it meets a specification. TDD is double entry book keeping. Its measuring
                    twice to cut once. Its a discipline that for me has been non-negotiable.`,
      imageLink: '/logos/tech/tdd.jpeg',
    },
  ],
}

export default TimelineCollection
