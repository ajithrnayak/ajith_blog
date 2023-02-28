---
title: "Demystifying SwiftUI's ResultBuilders"
date: "2023-02-28T00:00:00.000Z"
draft: false
path: "/demystifying-resultbuilders-in-swiftui"
category: "iOS"
tag: "SwiftUI"
coverImage:
  src: "./blog_cover.png"
  alt: "Blog Cover Image"
excerpt: "In this article, we look at how SwiftUI's Result Builders, a language feature that enables SwiftUI to interpret content as a sequence of views and combine them into one, are used."
---

With SwiftUI, Apple has introduced a modern way of building user interfaces for any Apple platform. In a [recent blog post](https://ajith.blog/elements-of-swiftui), I delved into SwiftUI's fundamentals, what sets it apart from other UI frameworks, and how it can speed up your upcoming project. If you're interested, take a look!

**Quick Note**:
This article assumes some familiarity with SwiftUI (and Marvel Comics). You might want to bookmark this for later if you haven't tried out SwiftUI yet.

The 'View' protocol is at the heart of SwiftUI. If you look through the definition, you'll notice that the `body` property, which is used to compose your views, is marked with `@MainActor` and `@ViewBuilder`.

```swift
@ViewBuilder @MainActor var body: Self.Body { get }
```

While [@MainActor](https://developer.apple.com/documentation/swift/mainactor) ensures that UI updates always happen on the main thread, the `@ViewBuilder` attribute interprets content as a sequence of views and combines them into one.

Any func or read-only computed var can be marked with `@ViewBuilder`. If so marked, the contents of that func or var will be interpreted as a list of Views. This list-like syntax is an example of a Domain-Specific Language, or [DSL](https://en.wikipedia.org/wiki/Domain-specific_language).

SwiftUI achieved this through a language feature called [Result Builders](https://docs.swift.org/swift-book/LanguageGuide/AdvancedOperators.html#ID630), which was included in the Swift 5.4 release. Before going through [an evolution](https://github.com/apple/swift-evolution/blob/main/proposals/0289-result-builders.md), the feature was referred as "function builders" in Swift 5.1 release. If we can debunk result builders, we will be able to appreciate SwiftUI's internal implementation and effectively use `@ViewBuilder` in our SwiftUI app.

Let's consider an example to demonstrate result builder usage.

![Thanos](https://media.giphy.com/media/ie76dJeem4xBDcf83e/giphy.gif)

[Marvel Comics](https://en.wikipedia.org/wiki/Marvel_Comics) supervillain [Thanos](<https://en.wikipedia.org/wiki/Thanos_(Marvel_Cinematic_Universe)>) seeks to collect all of the Infinity Stones and use them to kill half of all life in the universe, believing that his plan will save it from extinction.

```swift
import Foundation
import SwiftUI

protocol StoneRepresentable {
  var name: String { get }
  var ability: String { get }
  var color: Color { get }
}

// https://en.wikipedia.org/wiki/Infinity_Stones
enum InfinityStoneType: String {
  case space = "Space"
  case mind = "Mind"
  case reality = "Reality"
  case power = "Power"
  case time = "Time"
  case soul = "Soul"

  var ability: String {
    switch self {
    case .space: return "Teleport to places instantaneously"
    case .mind: return "Control minds"
    case .reality: return "Alter reality"
    case .power: return "Manipulate energy; increased strength"
    case .time: return "Control and manipulate time"
    case .soul: return "Control souls"
    }
  }

  var color: Color {
    switch self {
    case .space: return .blue
    case .mind: return .yellow
    case .reality: return .red
    case .power: return .purple
    case .time: return .green
    case .soul: return .orange
    }
  }
}

struct InfinityStone: StoneRepresentable,
                      CustomStringConvertible {
  var type: InfinityStoneType

  // MARK: - StoneRepresentable

  var name: String {
    return type.rawValue
  }
  var ability: String {
    return type.ability
  }

  var color: Color {
    return type.color
  }

  // MARK: - CustomStringConvertible

  var description: String {
    return type.rawValue
  }
}
```

He then proceeds to collect all the gems and houses them in a metal wearable ornament – the Gauntlet.

```swift
struct Ornament {
  var name: String
  var stones: [StoneRepresentable]
}

let infinityGauntlet = Ornament(
  name: "Gauntlet",
  stones: [
    InfinityStone(type: .space),
    InfinityStone(type: .mind),
    InfinityStone(type: .reality),
    InfinityStone(type: .power),
    InfinityStone(type: .time),
    InfinityStone(type: .soul)
  ])
```

With proper formatting this code representation already looks pretty neat and there's nothing wrong with adopting this approach. However, we can enhance this further using a result builder and achieve a syntax similar to SwiftUI for collecting different stones.

We will use a special attribute – `@resultBuilder` – to implement a result builder to represent the various stone types that constitute an ornament.

```swift
@resultBuilder
struct StoneCollector {
  static func buildBlock(_ components: StoneRepresentable...) -> [StoneRepresentable] {
    return components
  }
}
```

The [buildblock(\_:)](<https://developer.apple.com/documentation/swiftui/viewbuilder/buildblock(_:)>) method here simply combines all of the stones into an array. Then, when we annotate a property with `@StoneCollector`, we will benifit from result builder's slightly improved syntax as shown below:

```swift
struct Ornament {
  var name: String
  @StoneCollector var stones: () -> [StoneRepresentable]
}

let infinityGauntlet = Ornament(name: "Gauntlet") {
  InfinityStone(type: .space)
  InfinityStone(type: .mind)
  InfinityStone(type: .reality)
  InfinityStone(type: .power)
  InfinityStone(type: .time)
  InfinityStone(type: .soul)
}
```

Alternatively, a custom-initializer using `@StoneCollector` would be a much more neater and encouraged approach.

```swift
struct Ornament {
  var name: String
  var stones: [StoneRepresentable]

  init(name: String,
       @StoneCollector collector: () -> [StoneRepresentable]) {
    self.name = name
    self.stones = collector()
  }
}
```

There's even more! The ability to use a list or tree-like syntax in a natural, declarative manner is not the only feature of result builder. It can also handle conditional or repeated data (such as 'if' and 'for'), which is extremely useful when implementing conditional rendering in SwiftUI views.

```swift
extension StoneCollector {
    static func buildBlock(_ components: [StoneRepresentable]...) -> [StoneRepresentable] {
    components.flatMap { $0 }
  }

  static func buildEither(first component: [StoneRepresentable]) -> [StoneRepresentable] {
    component
  }

  static func buildEither(second component: [StoneRepresentable]) -> [StoneRepresentable] {
    component
  }

  static func buildOptional(_ component: StoneRepresentable?) -> [StoneRepresentable] {
    guard let component = component else { return [] }
    return [component]
  }
}
```

The `buildEither(first:)` and `buildEither(second:)` methods add support for `if`-`else`. In the below example, if the condition is met, `buildEither(first:)`method handles that and returns a sapphire ring

```swift
let isForDailyUse: Bool = false

let engagementRing = Ornament(name: "Engagement Ring") {
  if isForDailyUse {
    EngagementRing(type: .sapphire)
  } else {
    EngagementRing(type: .diamond)
  }
}
```

It is possible to support `if` statements without an `else` block and optional binding by including the `buildOptional(_:)` method. But as you can notice, it is fairly easy to create our own Domain-Specific Language, or DSL. For a complete list of Result-Building methods, see [Result Builders](https://docs.swift.org/swift-book/ReferenceManual/Attributes.html#ID633).

Similarly, `@ViewBuilder` is another kind of result builder with several result-building methods that allows us to construct views and assemble them into a view hierarchy.

```swift
@resultBuilder struct ViewBuilder
```

SwiftUI extensively uses [`ViewBuilder`](https://developer.apple.com/documentation/swiftui/viewbuilder) as a closure parameter attribute for providing multiple child views. For example, the following SwiftUI view uses `VStack` and it has initializer `init(alignment:spacing:content:)` that takes `@ViewBuilder` closure to build it's content. This enables us to list one or more child views in succession as contents.

```swift
struct ContentView: View {
  var body: some View {
    VStack {
      Image(systemName: "globe")
        .imageScale(.large)
        .foregroundColor(.accentColor)
      Text("Hello, world!")
    }
  }
}
```

Overall, understanding Result Builders is important for effectively using `@ViewBuilder` in SwiftUI apps.

#### In Conclusion

In this article, we looked at how SwiftUI's Result Builders, a language feature that enables SwiftUI to interpret content as a sequence of views and combine them into one, are used. We also covered the basics of Domain-Specific Language (DSL) syntax in Swift.

If you're interested in learning more, I suggest watching the [WWDC talk](https://developer.apple.com/videos/play/wwdc2021/10253/) on the particular topic. You'd use Result Builders in more ways, I bet.

I hope you enjoyed reading; until the next one, take care.
