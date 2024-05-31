export class UniqueContainer<ItemType, IdType> {
	private items: ItemType[];
	private ids: Set<IdType>;

	constructor() {
		this.items = [];
		this.ids = new Set<IdType>();
	}

	public getItems(): ItemType[] {
		return this.items;
	}

	public addItem(item: ItemType, id: IdType): boolean {
		if(this.ids.has(id)) return false;

		this.items.push(item);
		this.ids.add(id);
		return true;
	}
}
