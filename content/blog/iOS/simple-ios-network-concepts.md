---
title: [iOS][Network][2020.05.04]iOS Network Task API
date: 2020-05-04 17:05:90
category: iOS
draft: false
---

A data task is ideal for uses like calling a web service endpoint

SessionTask APIs

- URLSessionDataTask : to receive response data into memory  
- URLSessionDownloadTask : to stores the data directly to the file system 

How to create the Task

- You use a URL session instance to create the task
 fairly simple, you can use the shared instance of the URLSession class.

- If you want to interact with the transfer through delegate callbacks, you’ll need to create a session instead of using the shared instance. 
You use a URLSessionConfiguration instance when creating a session, also passing in a class that implements URLSessionDelegate or one of its subprotocols
Sessions can be reused to create multiple tasks, so for each unique configuration you need, create a session and store it as a property.

State

Once you have a session, you create a data task with one of the dataTask() methods. Tasks are created in a suspended state, and can be started by calling resume()


Receive Results with a Completion Handler

The simplest way to fetch data is to create a data task that uses a completion handler

To create a data task that uses a completion handler, call the dataTask(with:) method of URLSession. Your completion handler needs to do three things:

- Verify that the error parameter is nil. If not, a transport error has occurred; handle the error and exit.

- Check the response parameter to verify that the status code indicates success and that the MIME type is an expected value. If not, handle the server error and exit.

- Use the data instance as needed.

Receive Transfer Details and Results with a Delegate

With this approach, portions of the data are provided to the urlSession(_:dataTask:didReceive:) method of URLSessionDataDelegate as they arrive, until the transfer finishes or fails with an error. The delegate also receives other kinds of events as the transfer proceeds.

- urlSession(_:dataTask:didReceive:completionHandler:) verifies that the response has a succesful HTTP status code, and that the MIME type is text/html or text/plain. If either of these is not the case, the task is canceled; otherwise, it’s allowed to proceed.

- urlSession(_:dataTask:didReceive:) takes each Data instance received by the task and appends it to a buffer called receivedData.

- urlSession(_:task:didCompleteWithError:) first looks to see if a transport-level error has occurred. If there is no error, it attempts to convert the receivedData buffer to a string and set it as the contents of webView.


https://developer.apple.com/documentation/foundation/url_loading_system/fetching_website_data_into_memory