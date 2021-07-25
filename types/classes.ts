type Condition = {
    symbol: string;

}

// TypeCurrent

enum ConditionUnit { Currency, Percentage, Years};
enum Period { Monthly, Annual};

type InitialCondition = {
    defaultValue: number;
    label: string;
    unit: ConditionUnit,
    period?: Period
  }
  
  export namespace InitialConditions {
    export function list(): InitialCondition[] {
        return [
      {
        defaultValue: 1500,
        label: "Mortgage",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
      },
      {
        defaultValue: 500000,
        label: "Total house value",
        unit: ConditionUnit.Currency
      },
       {
        defaultValue: 28,
        label: "Years left on mortgage",
        unit: ConditionUnit.Years
       },
       {
        defaultValue: 1000,
        label: "House maintenance",
        unit: ConditionUnit.Currency,
        period: Period.Annual
       },
       {
        defaultValue: 500,
        label: "Home insurance",
        unit: ConditionUnit.Currency,
        period: Period.Annual
       },
       {
        defaultValue: 0.02,
        label: "Salary after tax",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        defaultValue: 1000,
        label: "Current ISA savings",
        unit: ConditionUnit.Currency
       },
       {
        defaultValue: 1000,
        label: "Current SIPP savings",
        unit: ConditionUnit.Currency
       },
       {
        defaultValue: 1000,
        label: "Current pension savings",
        unit: ConditionUnit.Currency
       },
       {
        defaultValue: 1000,
        label: "Current monthly savings",
        unit: ConditionUnit.Currency
       },
       {
        defaultValue: 0.02,
        label: "Personal pension contribution",
        unit: ConditionUnit.Percentage,
        period: Period.Monthly
       },
       {
        defaultValue: 0.05,
        label: "Employer pension contribution",
        unit: ConditionUnit.Percentage,
        period: Period.Monthly
       },
       {
        defaultValue: 1000,
        label: "Commuting costs",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        defaultValue: 1000,
        label: "Council tax",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        defaultValue: 1000,
        label: "Water",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        defaultValue: 1000,
        label: "Car insurance",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        defaultValue: 1000,
        label: "Road tax",
        unit: ConditionUnit.Currency,
        period: Period.Annual
       },
       {
        defaultValue: 1000,
        label: "Energy",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        defaultValue: 1000,
        label: "TV & Broadband",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        defaultValue: 1000,
        label: "Mobile",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        defaultValue: 1000,
        label: "Other fixed costs",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       }
      ]
    }
  }
