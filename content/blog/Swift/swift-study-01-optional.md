---
title: Optional unwrapping
date: 2020-09-29 14:09:21
category: swift
draft: false
---


## Optional unwrapping

### Forced Unwrapping

- Simple but The most dangerous 
- If there is no value, it might occur exception

```
var myName:String? = "derrick"

var derrick :String = myName!

myName = nil
derrick = myName!

if myName != nil {
    print("My name is \(myName!)")
} else {
    print("myname == nil")
}
```


### Optional Binding
- It will use when we want to check if there is a value
- And Can be use with optional channing

```
var myName:String? = "derrick"
var yourName:String? = nil


if let name = myName , let friend = yourName {
    print("We are friend!  \(name) & \(friend)")
}

yourName = "summer"

if let name = myName , let friend = yourName {
    print("We are friend!  \(name) & \(friend)")
}

```