// Import React
import React from "react"
import CodeSlide from "spectacle-code-slide"
import "normalize.css"
import "./prism-atom-dark.css"

// Import Spectacle Core tags
import {
  Layout,
  Fit,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Cite,
  Text,
  Appear,
  CodePane,
  Link,
  BlockQuote,
  Quote,
  S,
} from "spectacle"

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader"

// Import theme
import createTheme from "spectacle/lib/themes/default"

const theme = createTheme(
  {
    primary: "#191C1F",
    purple: "#EB008D",
    blue: "#0075EB",
    darkGrey: "#CED5DC",
    quaternary: "#EB008D",
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica",
  },
)

const logos = {
  one: require("../assets/1.png"),
  two: require("../assets/2.png"),
  three: require("../assets/3.png"),
  four: require("../assets/4.png"),
  five: require("../assets/5.png"),
  six: require("../assets/6.png"),
  seven: require("../assets/7.png"),
}

const images = {
  vlad: require("../assets/vlad.png"),
  client: require("../assets/client-only.svg"),
  traditional: require("../assets/traditional.svg"),
}

preloader(images)
preloader(logos)

//   <CodePane
// lang={"jsx"}
// theme="external"
// style={{ fontSize: 16 }}
// source={require("raw-loader!../assets/code.example")}
// />

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transitionDuration={200}
        theme={theme}
        progress="bar"
        contentWidth={1600}
        contentHeight={1000}
      >
        <Slide>
          <Heading textColor="darkGrey" size={6}>
            Alt + Shift + P - Presenter mode
          </Heading>
          <Heading textColor="darkGrey" size={6}>
            Alt + Shift + O - Preview mode
          </Heading>
          <Heading textColor="darkGrey" size={6}>
            Space or => - Next slide
          </Heading>
          <Heading textColor="darkGrey" size={6}>
            Space + Shift or &lt;= - Previous slide
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" textSize={120}>
            Hi! 👋
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="blue">GraphQL in Revolut?</Heading>
        </Slide>

        <Slide>
          <Heading textColor={"purple"}>That's the question</Heading>
        </Slide>

        <Slide>
          <Heading textColor={"blue"}>How beneficial?</Heading>
        </Slide>

        <Slide>
          <Heading textColor={"purple"}>How to do it?</Heading>
        </Slide>

        <Slide>
          <Heading textColor={"blue"}>
            Is possible to integrate it at all in our fast paced environment?
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} textColor={"blue"}>
            All these questions have been circulating in my brain
          </Heading>
          <Appear transitionDuration={1000}>
            <div>
              <Heading size={4} textColor={"darkGrey"}>
                And now I have answers
              </Heading>
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading textColor={"purple"}>I have a plan</Heading>
          <Appear transitionDuration={1000}>
            <div>
              <Heading size={4} textColor={"darkGrey"}>
                And I have a code
              </Heading>
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading textColor={"blue"} size={3}>
            Like one cool guy said
          </Heading>
          <Appear transitionDuration={1000}>
            <div>
              <Text textColor={"darkGrey"} margin={24}>
                Show me the code or it's never happened.
              </Text>
            </div>
          </Appear>
          <Appear transitionDuration={1000}>
            <div>
              <Image src={images.vlad} />
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading textColor={"purple"}>So here is the plan</Heading>
        </Slide>

        <Slide>
          <Heading textColor="blue">But before</Heading>
          <Appear>
            <Heading lineHeight={1.5} textColor={"darkGrey"} size={5}>
              How to{" "}
              <S textFont="primary" type="undeline" bgColor="darkGrey" textColor={"purple"} bold>
                proof
              </S>{" "}
              of concept?
            </Heading>
          </Appear>
          <Appear>
            <Heading lineHeight={1.5} textColor={"darkGrey"} size={5}>
              How to do it with{" "}
              <S textFont="primary" type="undeline" bgColor="darkGrey" textColor={"purple"} bold>
                minimal
              </S>{" "}
              effort?
            </Heading>
          </Appear>
          <Appear>
            <Heading lineHeight={1.5} textColor={"darkGrey"} size={5}>
              If it's{" "}
              <S textFont="primary" type="undeline" bgColor="darkGrey" textColor={"purple"} bold>
                worth
              </S>{" "}
              it, how to eventually{" "}
              <S textFont="primary" type="undeline" bgColor="darkGrey" textColor={"purple"} bold>
                move
              </S>
              ?
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading lineHeight={1.5} textColor={"darkGrey"}>
            Proof
          </Heading>
          <Heading lineHeight={1.5} textColor={"darkGrey"}>
            Minimal
          </Heading>
          <Heading lineHeight={1.5} textColor={"darkGrey"}>
            Worth
          </Heading>
          <Heading lineHeight={1.5} textColor={"darkGrey"}>
            To move
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple">Minimal Proof - solution</Heading>
          <Appear>
            <div>
              <Heading size={5} textColor={"darkGrey"}>
                Introduce simple GraphQL proxy server
              </Heading>
              <Heading size={5} textColor={"darkGrey"}>
                Introduce apollo-client setup on Backoffice
              </Heading>
              <Heading size={5} textColor={"darkGrey"}>
                Implement few features using it
              </Heading>
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading textSize={120} textColor="darkGrey">
            Wait a minute
          </Heading>
          <Appear>
            <Heading size={4} textColor="purple">
              Isn't it NOT MINIMAL?
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Text textColor="darkGrey">
            It will require setting up few instances of the server, its deploy config, require some
            new code to handle tokens and stuff, it will require duplication of the code of
            Backoffice Frontend to Proxy backend and many many more stuff and...
          </Text>
          <Heading textColor="darkGrey">...</Heading>
        </Slide>

        <Slide>
          <Heading textColor="darkGrey" lineHeight={1.5}>
            Enough I got it
          </Heading>
          <Appear>
            <Heading textColor="blue" size={3}>
              But as I said
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="blue" size={3}>
              I have code
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="blue" size={3}>
              So I've got an idea
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading textColor="purple" lineHeight={1.5}>
            GraphQL Server on client 🤯
          </Heading>
        </Slide>

        <Slide>
          <Image src={images.traditional} />
        </Slide>

        <Slide>
          <Image src={images.client} />
        </Slide>

        <Slide>
          <Heading textColor="blue">Pros</Heading>
          <Heading textColor="darkGrey" size={5} margin={36}>
            Truly minimal and low risk
          </Heading>
          <Heading textColor="darkGrey" size={5} margin={36}>
            Maximum code reusage
          </Heading>
          <Heading textColor="darkGrey" size={5} margin={36}>
            No infrastructure changes
          </Heading>
          <Heading textColor="darkGrey" size={5} margin={36}>
            To have real server is just copy-paste + 1 day of testing
          </Heading>
          <Heading textColor="darkGrey" size={5} margin={36}>
            To change from client-server to real server is just 1 line of code
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple">Cons</Heading>
          <Heading textColor="darkGrey" size={5} margin={36}>
            Increased bundle size (~75kb)
          </Heading>
          <Heading textColor="darkGrey" size={5} margin={36}>
            Nobody can benefit from GraphQL outside of the client code
          </Heading>
          <Heading textColor="darkGrey" size={5} margin={36}>
            It's still not a real GraphQL so overfetching and n+1 problem persists for client
          </Heading>
          <Heading textColor="darkGrey" size={5} margin={36}>
            Like with anything new, learning curve
          </Heading>
        </Slide>

        <Slide>
          <Heading textSize={120} textColor="darkGrey">
            It's all cool
          </Heading>
          <Appear>
            <Heading size={4} textColor="blue">
              Is new approach is really WORTH it?
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading textSize={120} textColor="purple">
            Yes it is
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="blue">GraphQL is typed</Heading>
          <Appear>
            <div>
              <Heading textColor="darkGrey" size={6} margin={36}>
                You know what you'll get
              </Heading>
              <Heading textColor="darkGrey" size={6} margin={36}>
                You get autocomplete and inline suggestions
              </Heading>
              <Heading textColor="darkGrey" size={6} margin={36}>
                You get free documentation by design
              </Heading>
              <Heading textColor="darkGrey" size={6} margin={36}>
                You can read AST and make some{" "}
                <S bold textFont="primary" type="" textColor="purple">
                  magic
                </S>{" "}
                🧙🏼‍♂️
              </Heading>
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading textSize={120} textColor="purple">
            ✨ Magic ✨
          </Heading>
        </Slide>
        <Slide>
          <Heading textSize={120} textColor="blue">
            ✨✨✨
          </Heading>{" "}
          <Heading textSize={120} textColor="blue">
            Schema first development magic
          </Heading>{" "}
          <Heading textSize={120} textColor="blue">
            ✨✨✨
          </Heading>
        </Slide>
        <Slide>
          <Heading textSize={120} textColor="purple">
            How it looks like?
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="blue">Preconditions</Heading>
          <Heading textColor="darkGrey" size={6} margin={36}>
            Recently Backoffice was partially moved to TypeScript
          </Heading>
          <Heading textColor="darkGrey" size={6} margin={36}>
            We've loved it, we enoying it a lot
          </Heading>
          <Heading textColor="darkGrey" size={6} margin={36}>
            But typing is hard, long process.
          </Heading>
          <Heading textColor="darkGrey" size={6} margin={36}>
            Especially when backend changes.
          </Heading>
        </Slide>

        <Slide>
          <Heading textSize={120} textColor="purple">
            What if we can get types from schema?
          </Heading>
          <Appear>
            <Heading size={3} textColor="darkGrey">
              What about "AUTOMATICALLY"?
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading textSize={120} textColor="blue">
            Schema first approach
          </Heading>
          <Appear>
            <Heading textColor="darkGrey" textAlign="left" size={6} margin={36}>
              1. Describe queries, mutations, subscriptions and types in GraphQL schema
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="darkGrey" textAlign="left" size={6} margin={36}>
              2. Run codegen to generate Server and Client side types/helpers
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="darkGrey" textAlign="left" size={6} margin={36}>
              3. Implement fully typed server resolvers
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="darkGrey" textAlign="left" size={6} margin={36}>
              4. Use generated apollo helpers in client to get data/mutation functions
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading textSize={120} textColor="blue">
            Benefits
          </Heading>
          <Appear>
            <Heading textColor="darkGrey" size={6} margin={36}>
              In case of breaking changes in server you will automatically get new typings
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="darkGrey" size={6} margin={36}>
              Changed typings -> compilation errors
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="darkGrey" size={6} margin={36}>
              Fix errors and you're done
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading textSize={120} textColor="purple">
            Downsides?
          </Heading>
          <Appear>
            <Heading size={3} textColor="darkGrey">
              Are you kidding me?
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading textSize={120} textColor="blue">
            Okay, how generators are working?
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple">Real working example?</Heading>
          <Appear>
            <div>
              <Heading textColor="darkGrey" size={6} margin={36}>
                First feature in Backoffice UI is done using this approach
              </Heading>
              <Heading textColor="darkGrey" size={6} margin={36}>
                Its name is Swift Messenger
              </Heading>
              <Heading textColor="darkGrey" size={6} margin={36}>
                All roadblocks passed, experience gained
              </Heading>
              <Heading textColor="darkGrey" size={6} margin={36}>
                Please, try it out
              </Heading>
              <Heading textColor="darkGrey" size={6} margin={36}>
                Please, use it as an example
              </Heading>
            </div>
          </Appear>
        </Slide>

        <Slide>
          <Heading textColor="blue">Hidden benefits?</Heading>
          <Appear>
            <Heading textColor="darkGrey" size={6} margin={36}>
              API discoverability by design gives Techincal Support team more power
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="darkGrey" size={6} margin={36}>
              Button is broken? Deploy stuck for 50 miuntes? 20+ people are blocked from their work?
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="darkGrey" size={6} margin={36}>
              Tech Support will be able call it manually for agents
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="darkGrey" size={6} margin={36}>
              Actually it's so simple so agents will be able to do it themselves
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading textColor="blue">Hidden benefits?</Heading>
          <Heading textColor="darkGrey" size={6} margin={36}>
            Forgot the parameter? Schema will say about it BEFORE the call.
          </Heading>
          <Appear>
            <Heading textColor="darkGrey" size={6} margin={36}>
              New feature is there? Never heard of? Go to docs tab to find out.
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="darkGrey" size={6} margin={36}>
              New to the dev team? What the hell API can do? You have the answer.
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="purple" size={3} margin={36}>
              ALL BY DESIGN
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading textColor="blue">Hidden benefits?</Heading>
          <Heading textColor="darkGrey" size={6} margin={36}>
            Field deprecation? API versioning? Forget about it with @deprecated directive
          </Heading>
          <Appear>
            <Heading textColor="darkGrey" size={6} margin={36}>
              Naming of services is that random you can't understand anything? GraphQL doesn't care,
              he has everything.
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="purple" size={6} margin={36}>
              BE: What fields I should return?
            </Heading>
          </Appear>
          <Appear>
            <Heading textColor="blue" size={6} margin={36}>
              FE: Return whatever the shit you want, I'll take only what I need
            </Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading textColor="purple">Using ONE request</Heading>
        </Slide>

        <Slide>
          <Heading textColor="blue" size={4} margin={36}>
            REST is giving you the whole jungle when you need only banana
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" size={4} margin={36}>
            Imagine we will need to develop Business Mobile app?
          </Heading>
          <Heading textColor="blue" size={4} margin={36}>
            Or Web app for Retail?
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" size={4} margin={36}>
            Mobile clients and Web clients are different
          </Heading>
          <Heading textColor="blue" size={4} margin={36}>
            What's good for web, bad for mobile
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" size={4} margin={36}>
            Remember versioning? Remember whole jungle when banana is needed?
          </Heading>
          <Heading textColor="blue" size={4} margin={36}>
            With REST we will end up create NEW APIs FROM SCRATCH to avoid n+1 and other issues
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" size={2} margin={36}>
            GraphQL solves that
          </Heading>
          <Heading textColor="blue" size={2} margin={36}>
            Giving MUCH more in return
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" size={4} margin={36}>
            Frontend devs. Remember writing client side caching, optimistic responses, loading
            states, cache invalidation etc.
          </Heading>
          <Heading textColor="blue" size={4} margin={36}>
            Do you want to write it again?
          </Heading>
          <Heading textColor="purple" size={4} margin={36}>
            Again, because REST is not a spec, and every new REST is NEW and require new ad-hoc code
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="darkGrey" margin={36}>
            Testing?
          </Heading>
          <Heading textColor="blue" size={4} margin={36}>
            Backend - testing resolvers is as simple as test any async function that calls faked
            endpoint.
          </Heading>
          <Heading textColor="purple" size={4} margin={36}>
            Frontend - MockedProvider prepacked component alongside
            with rich docs of react-apollo
          </Heading>
          <Heading textColor="darkGrey" size={6} margin={36}>
            Probably tests boilerplate may be generated automatically too
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" size={4} margin={36}>
            Appolo client solves that all in three nice packages for all platforms.
          </Heading>
          <Heading textColor="blue" size={4} margin={36}>
            iOS, Android, Web
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" size={2} margin={36}>
            YES
          </Heading>
          <Heading textColor="blue" size={4} margin={36}>
            It will require some changes, but it's designed to be adoped easily step by step.
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" size={2} margin={36}>
            Here are the compaines using it.
          </Heading>
        </Slide>

        <Slide>
          <Image src={logos.one} />
        </Slide>

        <Slide>
          <Image src={logos.two} />
        </Slide>

        <Slide>
          <Image src={logos.three} />
        </Slide>

        <Slide>
          <Image src={logos.four} />
        </Slide>

        <Slide>
          <Image src={logos.five} />
        </Slide>

        <Slide>
          <Image src={logos.six} />
        </Slide>

        <Slide>
          <Image src={logos.seven} />
        </Slide>

        <Slide>
          <Heading textColor="blue" margin={36}>
            And many more...
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" margin={36}>
            State of Javascript 2018
          </Heading>
          <Heading textColor="darkGrey" size={6} margin={36}>
            Last polls showed two years in the row GraphQL as the{" "}
            <S textFont="primary" type="undeline" textColor={"purple"} bold>
              most "want to learn"
            </S>{" "}
            technology with crazy
          </Heading>
          <Heading size={3} textColor="blue">
            87.7%
          </Heading>
          <Heading textColor="darkGrey" size={6} margin={36}>
            And also got{" "}
            <S textFont="primary" type="undeline" textColor={"purple"} bold>
              Highest Satisfaction
            </S>{" "}
            award in data layer category from actual users with promising
          </Heading>
          <Heading size={3} textColor="blue">
            94.2%
          </Heading>
          <Heading textColor="darkGrey" size={6} margin={36}>
            And only{" "}
            <S textFont="primary" type="undeline" textColor={"purple"} bold>
              1.4%
            </S>{" "}
            that used it will prefer not to use it again.
          </Heading>
          <Heading textColor="darkGrey" size={6} margin={36}>
            In comparsion with Redux where{" "}
            <S textFont="primary" type="undeline" textColor={"purple"} bold>
              10.3%
            </S>{" "}
            of the users "would not use again"
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="purple" margin={36}>
            Be curious. Try, read, think, research and ask.
          </Heading>
          <Heading textColor="darkGrey" size={4} margin={36}>
            I'm here to help, to answer your questions and give you info
          </Heading>
        </Slide>

        <Slide>
          <Heading textColor="blue" margin={36}>
            On an ending note. Quote.
          </Heading>
        </Slide>

        <Slide>
          <Text textColor="darkGrey" textSize={38} lineHeight={4} textAlign="left">
            When we took a closer look, we found that UI developers were spending less than 1/3 of
            their time actually building UI. The rest of that time spent was figuring out where and
            how to fetch data, filtering/mapping over that data and orchestrating many API calls.
          </Text>
          <br />
          <Text textColor="darkGrey" textSize={38} lineHeight={4} textAlign="left">
            We had some big developer experience and performance problems. GraphQL solves this and
            more.
          </Text>
          <Cite textAlign="left" textColor="blue">
            PayPal Engineering
          </Cite>
        </Slide>

        <Slide>
          <Text textColor="darkGrey" textSize={38} lineHeight={4} textAlign="left">
            GraphQL is not a silver bullet. It will not replace REST just yet. It works together
            with REST and they make a great company. It has downsides and corner cases where REST
            does a better job.
            <br />
            <br />
            REST is hard and complex thing to make it right, requires a lot of efforts that we
            better spend on building better experiences for our users.
            <br />
            <br />
            We will and should continue to use both of them.
            <br />
            <br />
            Right tool, for right case.
          </Text>
          <br />
          <Cite textAlign="left" textColor="purple">
            Me :D
          </Cite>
        </Slide>

        <Slide>
          <Heading textSize={120} textColor="blue">
            Thanks! 😇
          </Heading>
        </Slide>
      </Deck>
    )
  }
}
