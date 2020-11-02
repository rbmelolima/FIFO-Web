export default interface WebStorage {
  clean: (key: any) => any;
  get: (key: any) => any;
  set: (key: any) => any;
}