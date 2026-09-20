function ShopFilters({ categories, selectedCategory, onSelectCategory }) {
	return (
		<div className="shop-filters" role="tablist" aria-label="Shop category filters">
			{categories.map((category) => (
				<button
					type="button"
					key={category.key}
					className={selectedCategory === category.key ? 'shop-filter shop-filter--active' : 'shop-filter'}
					onClick={() => onSelectCategory(category.key)}
					role="tab"
					aria-selected={selectedCategory === category.key}
				>
					{category.label}
				</button>
			))}
		</div>
	);
}

export default ShopFilters;
