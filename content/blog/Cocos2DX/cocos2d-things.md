---
title: Cocos2DX,Concept,2020.03.22 Hello Cocos2D-x
date: 2020-03-22 15:03:70
category: Cocos2DX
draft: false
---

# What is Cocos2D-X?

Open Source Cross-Platform Game Development Framework
The engine provides rich functions such as graphics rendering, GUI, audio, network, physics, user input, etc., and is widely used in game development and interactive application construction. Its core is written in C++ and supports development in C++, Lua. Cocos2d-x deploys to iOS, Android, Windows and Mac systems with features focused on native mobile platforms.

# Why choose Cocos2d-x
- Why would you want to choose Cocos2d-x over other available game engines?
    - Modern C++ API (please refer to the modernizing done in version 3.0)
    - Cross-platform - desktop and mobile
    - Capability to test and debug your game on the desktop and then push it to a mobile or desktop target
    - A vast API of functionality including sprites, actions, animations, particles, transitions, timers, events (touch, keyboard, accelerometer, mouse), sound, file IO, persistence, skeletal animations, 3D

# Download

https://www.cocos2d-x.org/download

# Get started 

How to start a new game
-----------------------

1. Download the code from [cocos2d download site][4] or clone this repo (instructions above)
2. Run `setup.py`
3. Run the `cocos` script

Example:

    $ cd cocos2d-x
    $ ./setup.py
    $ source FILE_TO_SAVE_SYSTEM_VARIABLE
    $ cocos new MyGame -p com.your_company.mygame -l cpp -d NEW_PROJECTS_DIR
    $ cd NEW_PROJECTS_DIR/MyGame


### Build and run a new project for Android ###

Cocos2d-x supports Android Studio. Simple open the `proj.android` directory from within the Android Studio environment. More information can be found in our [documentation](http://www.cocos2d-x.org/docs/cocos2d-x/en/installation/Android-Studio.html).
   
### Build and run a new project for iOS ###

    $ cocos run -p ios

### Build and run a new project for OSX ###

    $ cocos run -p mac



Reference
- https://www.cocos.com/en/
- https://www.youtube.com/watch?v=grsont9CeWc
- README.md in cocos sample project

