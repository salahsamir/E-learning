/* eslint-disable no-restricted-globals */

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    // eslint-disable-next-line no-useless-escape
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
};

const saveSubscription = async (subscription) => {
  const response = await fetch("http://localhost:4000/save-subscription", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(subscription),
  });

  return response.json();
};

self.addEventListener("activate", async (e) => {
  const subscription = await self.registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      "BC715ldq3LNaKheFg_f4NiFBYZwj3qzRKcxnemdng3jBICMFvyjQ99c3SnkdQ2vL8mNPc6L0ZlWYyuF_zQoBlo0"
    ),
  });

  const response = await saveSubscription(subscription);
  console.log(response);
});

self.onnotificationclick = (event) => {
  console.log("On notification click: ", event);
  // eslint-disable-next-line no-undef
  clients.openWindow(event.notification.data.url);
};
self.addEventListener("push", (e) => {
  const data = e.data.json();

  self.registration.showNotification(data.title, {
    icon: `https://e-learning-azure.vercel.app/favicon.ico`,
    body: data.body,
    url: data.url,
    data: data,
  });
});
