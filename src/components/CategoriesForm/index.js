import React from "react";
import { TransactionExpenseTypes } from "../../domain/transaction";

function CategoriesForm({ selectCategory }) {
  return (
    <div>
      <input
        className="form-control form-control-sm"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        onChange={(e) => selectCategory(e.target.value)}
      />

      <datalist id="datalistOptions">
        {TransactionExpenseTypes.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
    </div>
  );
}

export default CategoriesForm;
