---
title: "How to opt-out of dark mode on iOS"
date: "2019-09-23T00:00:00.000Z"
draft: false
path: "/how-to-opt-out-of-dark-mode-on-iOS"
category: "iOS"
tag: "iOS Development"
excerpt: "Here's how you can opt-out of Apple's new dark interface style on iOS. You can either opt-out of dark mode entirely or choose specific views, view controllers, or window."
---

If you are not using Xcode 11 or later (i,e iOS 13 or later SDK), your app has not automatically opted to support dark mode. So, there's no need to opt out of dark mode.  
If you are using Xcode 11 or later, the system has automatically enabled dark mode for your app.  
There are two approaches to disable dark mode depending on your preference. You can disable it entirely or disable it for any specific window, view, or view controller.

#### Disable Dark Mode Entirely for your App

You can disable dark mode by including the `UIUserInterfaceStyle` key with a value as `Light` in your app’s Info.plist file.

![Top iOS Development Resources To Follow](./info-plist.png)

This ignores the user's preference and always applies a light appearance to your app.

#### Disable dark mode for Window, View, or View Controller

You can force your interface to always appear in a light or dark style by setting the `overrideUserInterfaceStyle` property of the appropriate window, view, or view controller.

###### View controllers:

```swift
override func viewDidLoad() {
    super.viewDidLoad()
    /* view controller’s views and child view controllers
     always adopt a light interface style. */
    overrideUserInterfaceStyle = .light
}
```

###### Views:

```swift
// The view and all of its subviews always adopt light style.
youView.overrideUserInterfaceStyle = .light
```

###### Window:

```swift
/* Everything in the window adopts the style,
 including the root view controller and all presentation controllers that
 display content in that window.*/
window.overrideUserInterfaceStyle = .light
```

> Note: Apple strongly encourages to support dark mode in your app. So,
> you can only disable dark mode temporarily.

Read more from Apple's documentation here: [Choosing a Specific Interface Style for Your iOS App](https://developer.apple.com/documentation/appkit/supporting_dark_mode_in_your_interface/choosing_a_specific_interface_style_for_your_ios_app)
<br/><br/>
This post was originally written to answer a Stackoverflow [question](https://stackoverflow.com/a/58062075/1835803).
