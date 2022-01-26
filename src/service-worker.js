/* eslint-disable no-undef */
self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
  debug: true,
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("push", function (event) {
  let push_message = event.data.text();

  click_open_url = "https://www.fer.unizg.hr/predmet/web2";
  const options = {
    body: push_message.body,
  };
  event.waitUntil(
    self.registration.showNotification("my notification", options)
  );
});

self.addEventListener("notificationclick", function (event) {
  const clickedNotification = event.notification;
  clickedNotification.close();
  if (click_open_url) {
    const promiseChain = clients.openWindow(click_open_url);
    event.waitUntil(promiseChain);
  }
});
