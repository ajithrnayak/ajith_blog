---
title: "Core Data vs Couchbase Lite"
date: "2014-05-31T00:00:00.000Z"
draft: false
path: "/core-data-vs-couchbase"
category: "iOS Development"
tag: "iOS Development"
excerpt: "I worked with Couchbase-Lite for a complex app, ED Controls, and, many people asked me to describe the advantages of Couchbase-Lite over Core Data, they asked me why we chose Couchbase-Lite over Core Data."
---

I worked with Couchbase-Lite for a complex app, [ED Controls](https://edcontrols.com), and, many people asked me to describe the advantages of Couchbase-Lite over Core Data, they asked me why we chose Couchbase-Lite over Core Data.

Core Data is simply brilliant at what it does on the \*\*air quotes\*\* device. Please, let me explain why! It's 2014, the world of mobile device users is now expecting magic, but Core Data on a mobile device doesn't know that the rest of the world exists; it's not cool!!

Core Data is an Object Graph with a persistence mechanism. An attempt to make storage of model data as easy as a piece of cake for Objective-C developers, and it's brilliant!! The "not cool" part about it is that it fails to deliver the magic expected; the magic of sync.

###### The magic of sync

Say, you have a Universal app and users of your app need to edit it on your iPhone, and the update should appear on your iPad. Or they would expect a change on the desktop web app to appear on the iPhone / iPad and vice versa.

Now, if you're using Core Data, you can use the same iOS app model files in your OS X desktop application. This is a re-use of some code, but you may have isolated data stores in each device, and you need to implement a solution to manage the changes between them.

I'm also pretty sure there are iOS users who also have an Android device, or have recently switched to Android. You may be able to use your app on different devices as well as multiple platforms, including the Web.

Argh! all that data migration.

Another use case I’m thinking of is offline usage. Some users want to make changes on applications in offline, and replicate those changes back up as soon as the device is back online (or, when they sync next time).

In either cases, users expect "edit once, magically appear everywhere”. In other words, what you need here is a shared dataset in the cloud, and then sync it down to the phone (or, other devices), facilitate better performance when cellular data is not fast enough/offline. Ultimately, keep the content up to date across all the devices.

Core Data has no concept of this yet, so you're going to have to bear the pain of implementing sync yourself. With Couchbase-lite around, you can simply use "Replication" and watch magic happen with less effort than Core Data.

Oh, w00t!!

![Developers be like](./devs-like.png)

In addition, Couchbase-Lite could be perfect for peer-to-peer (device-to-device) replication. Your app / game can sync your data between devices just like that. And offline use keeps your app responsive with access to local data.

Sync is a big reason to choose Couchbase-Lite over Core Data! We use [Apache CouchDB](https://couchdb.apache.org) and Couchbase-Lite is compatible with its replication protocol.

Do you need more reasons?

###### Flexible schema

Core Data is strongly schema-based and can be tricky to migrate. The Couchbase-Lite document store is here to rescue you. With the NoSQL database in your app, the data is represented by a flexible schema form, JSON.

It's a lot easier, the data layout can have different structures, and then you can write queries to get what you want. This could save you a lot of time, especially during the development phase.

###### Conflict resolution

Conflicts in your changes are most likely to occur when you make them on multiple devices , especially when you do them offline. It's up to your app to merge / discard conflicting changes, but Couchbase-Lite Replication can identify conflicting updates by using revision tree histories. So, you've got less trouble managing the conflict.

###### Simpler API’s

I also worked with Core Data before moving to this super cool NoSQL stuff, and believe me that it's easier to use Couchbase-Lite APIs than Core Data.

Not yet convinced? Have you got arguments? Well, let's catch up at a place where beer is served!
