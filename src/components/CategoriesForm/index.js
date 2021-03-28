import React from "react";
import { TransactionExpenseTypes } from "../../domain/transaction";

function CategoriesForm() {
  return (
    <div>
      <input
        className="form-control form-control-sm"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
        
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
