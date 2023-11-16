class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    itemCount() {
        return this.collection.length;
    }

    pageItemCount(pageIndex) {
        const totalPages = this.pageCount();

        if (pageIndex < 0 || pageIndex >= totalPages) {
            return -1;
        }

        if (pageIndex === totalPages - 1) {
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        }

        return this.itemsPerPage;
    }

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1;
        }

        return Math.floor(itemIndex / this.itemsPerPage);
    }
}