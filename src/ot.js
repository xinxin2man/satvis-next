import satvisSetup from "./app";

const { cc } = satvisSetup({
  sat: {
    enabledTags: ["OT"],
    enabledComponents: ["Point", "Label", "Orbit", "Sensor cone"],
  },
  cesium: {
    layers: ["ArcGis"],
  },
});

cc.sats.addFromTleUrls([
  ["data/tle/ot.txt", ["OT"]],
  ["data/tle/forest-3-launch.txt", ["F3"]],
  ["data/tle/transporter-12.txt", ["T12"]],
  ["data/tle/otc.txt", ["OTC"]],
  ["data/tle/wfs.txt", ["WFS"]],
  ["data/tle/groups/globalstar.txt", ["Globalstar"]],
  ["data/tle/groups/iridium-NEXT.txt", ["IridiumNEXT"]],
  ["data/tle/groups/planet.txt", ["Planet"]],
  ["data/tle/groups/spire.txt", ["Spire"]],
]);
