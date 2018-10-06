import React from "react";

export const filesave = props => (
<form>
    <label for="exampleFormControlFile1">Choose where to Save Reports</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" {...props} />
</form>
);
