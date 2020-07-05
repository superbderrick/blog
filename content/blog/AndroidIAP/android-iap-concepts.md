---
title: AndroidIAP Overview,2020.07.05 Android IAP Overview
date: 2020-07-05 17:07:79
category: AndroidIAP
draft: false
---

Life of a purchase

Here's a typical purchase flow for a one-time purchase or a subscription

- Show the user what they can buy
- Launch the purchase flow for the user to accept the purchase
- Verify the purchase on your server
- Give content to the user, and acknowledge delivery of the content. Optionally, mark the item as consumed so that the user can buy the item again

Subscriptions states

- Active: User is in good standing and has access to the subscription
- Cancelled: User has cancelled but still has access until expiration
- In grace period: User experienced a payment issue, but still has access while Google is retrying the payment method
- On hold: User experienced a payment issue, and no longer has access while Google is retrying the payment method
- Paused: User paused their access, and does not have access until they resume
- Expired: User has cancelled and lost access to the subscription. The user is considered churned at expiration


Google Play Billing tracks products and transactions using purchase tokens and Order IDs

A purchase token is a string that represents a buyer's entitlement to a product on Google Play. It indicates that a Google user is entitled to a specific product that is represented by a SKU

You can use the purchase token with the Google Play Developer API

An Order ID is a string that represents a financial transaction on Google Play. This string is included in a receipt that is emailed to the buyer. You can use the Order ID to manage refunds in the used in sales and payout reports

Order IDs are created every time a financial transaction occurs. Purchase tokens are generated only when a user completes a purchase flow.

For one-time products, every purchase creates a new purchase token. Most purchases also generate a new Order ID. 

The exception to this is when the user is not charged any money, as described in Promo codes.

For subscriptions, an initial purchase creates a purchase token and an Order ID. For each continuous billing period, the purchase token stays the same, and a new Order ID is issued. Upgrades, downgrades, replacements, and re-sign-ups all create new purchase tokens and Order IDs

For subscriptions, note the following:

Subscription upgrades, downgrades, and other subscription purchase flows generate purchase tokens that must replace a previous purchase token.
 You must invalidate the purchase tokens that appear in the linkedPurchaseToken field of the Google Play Developer API. For more information, see Implementing linkedPurchaseToken correctly to prevent duplicate subscriptions.
Order numbers for subscription renewals contain an additional integer that represents a specific renewal instance. For example, an initial subscription Order ID might be GPA.1234-5678-9012-34567 with subsequent Order IDs being GPA.1234-5678-9012-34567..0 (first renewal), GPA.1234-5678-9012-34567..1 (second renewal), and so on.


Error Handling
- Google Play Billing Library returns errors in the form of BillingResult
- BillingResult contains a debug message, which is useful during development to diagnose errors

