ServiceConfiguration.configurations.remove({
    service: "fitbit"
});

ServiceConfiguration.configurations.upsert(
    { service: "fitbit" },
    { $set: { consumerKey: 18398fc7a196fce2495f174166cce717, secret: 58f05ffbe9edcd2ba2fc48a5448e1f05 } }
);