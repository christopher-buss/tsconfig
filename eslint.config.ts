import isentinel from "@isentinel/eslint-config";

export default isentinel({
	roblox: false,
	rules: {
		"package-json/require-types": "off",
	},
	type: "package",
	typescript: {
		typeAware: false,
	},
});
