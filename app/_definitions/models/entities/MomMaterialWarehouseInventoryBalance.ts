import type { TDictionaryCodes } from "../../meta/data-dictionary-codes";
import type { TEntitySingularCodes } from "../../meta/model-codes";
import type { RapidEntity } from "@ruiapp/rapid-extension";

const entity: RapidEntity<TEntitySingularCodes, TDictionaryCodes> = {
  namespace: "mom",
  code: "MomMaterialWarehouseInventoryBalance",
  name: "库存量-按物品和仓库分组",
  description: "记录某一种物品的数量",
  fields: [
    {
      code: "material",
      name: "物品",
      type: "relation",
      targetSingularCode: "base_material",
      targetIdColumnName: "material_id",
    },
    {
      code: "tags",
      name: "标签",
      type: "text",
    },
    {
      code: "warehouse",
      name: "仓库",
      type: "relation",
      targetSingularCode: "mom_warehouse",
      targetIdColumnName: "warehouse_id",
    },
    {
      code: "unit",
      name: "单位",
      type: "relation",
      targetSingularCode: "base_unit",
      targetIdColumnName: "unit_id",
    },
    {
      code: "allocableQuantity",
      name: "可分配数量",
      description: "可分配数量，包括在库但未被预定的数量。",
      type: "double",
    },
    {
      code: "onHandQuantity",
      name: "在库数量",
      description: "在仓库中的数量，包括已被预订或分配的数量。",
      type: "double",
    },
    {
      code: "allocatedQuantity",
      name: "已分配数量",
      type: "double",
      description:
        "销售发货单已经批准但还没有发货的成品数量；或者生产领料单已经审核通过但还未领料的数量。已分配数量和在库数量无关，在库数量不一定大于等于已分配数量。一旦订单开始发货，或者完成了生产领料，应该扣减掉对应的已分配数量和在库数量。",
    },
  ],
};

export default entity;
