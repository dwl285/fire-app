// TypeCurrent

enum ConditionUnit {
  Currency,
  Percentage,
  Years,
}
enum Period {
  Monthly,
  Annual,
}

export enum ConditionType {
  Initial,
  Assumption,
}

interface ConditionMetadata {
  condition: Condition;
  defaultValue: number;
  label: string;
  unit: ConditionUnit;
  period?: Period;
  conditionType: ConditionType;
}

enum Condition {
  // Initial conditions
  Mortgage,
  HouseValue,
  MortgageYearsLeft,
  HouseMaintenance,
  HomeInsurance,
  Salary,
  ISASavings,
  SIPPSavings,
  PensionSavings,
  MonthlySavings,
  PersonalPension,
  EmployerPension,
  Commute,
  CouncilTax,
  Water,
  CarInsurance,
  RoadTax,
  Energy,
  TVAndBroadband,
  Mobile,
  OtherFixedCosts,
  // Assumptions
  VariableSpendingReduction,
  SalaryIncrease,
  InterestOnSavings,
  SafeWithdrawlRate,
  VariableSpendingReductionWhenRetired,
  SavingsShareInSIPP,
  Inflation,
  CapitalGainsTax,
  ISAAllowance,
  PensionAllowance,
}

export class Conditions {
  public static metadata(condition: Condition) {
    const metadata = Conditions.MAP.get(condition);
    if (!metadata) {
      throw new Error("Unrecognized condition.");
    }
    return metadata;
  }

  public static list() {
    return Conditions.LIST;
  }

  private static readonly LIST: ConditionMetadata[] = [
    {
      condition: Condition.Mortgage,
      defaultValue: 1500,
      label: "Mortgage",
      unit: ConditionUnit.Currency,
      period: Period.Monthly,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.HouseValue,
      defaultValue: 500000,
      label: "Total house value",
      unit: ConditionUnit.Currency,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.MortgageYearsLeft,
      defaultValue: 28,
      label: "Years left on mortgage",
      unit: ConditionUnit.Years,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.HouseMaintenance,
      defaultValue: 1000,
      label: "House maintenance",
      unit: ConditionUnit.Currency,
      period: Period.Annual,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.HomeInsurance,
      defaultValue: 500,
      label: "Home insurance",
      unit: ConditionUnit.Currency,
      period: Period.Annual,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.Salary,
      defaultValue: 0.02,
      label: "Salary after tax",
      unit: ConditionUnit.Currency,
      period: Period.Monthly,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.ISASavings,
      defaultValue: 1000,
      label: "Current ISA savings",
      unit: ConditionUnit.Currency,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.SIPPSavings,
      defaultValue: 1000,
      label: "Current SIPP savings",
      unit: ConditionUnit.Currency,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.PensionSavings,
      defaultValue: 1000,
      label: "Current pension savings",
      unit: ConditionUnit.Currency,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.MonthlySavings,
      defaultValue: 1000,
      label: "Current monthly savings",
      unit: ConditionUnit.Currency,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.PersonalPension,
      defaultValue: 0.02,
      label: "Personal pension contribution",
      unit: ConditionUnit.Percentage,
      period: Period.Monthly,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.EmployerPension,
      defaultValue: 0.05,
      label: "Employer pension contribution",
      unit: ConditionUnit.Percentage,
      period: Period.Monthly,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.Commute,
      defaultValue: 1000,
      label: "Commuting costs",
      unit: ConditionUnit.Currency,
      period: Period.Monthly,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.CouncilTax,
      defaultValue: 1000,
      label: "Council tax",
      unit: ConditionUnit.Currency,
      period: Period.Monthly,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.Water,
      defaultValue: 1000,
      label: "Water",
      unit: ConditionUnit.Currency,
      period: Period.Monthly,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.CarInsurance,
      defaultValue: 1000,
      label: "Car insurance",
      unit: ConditionUnit.Currency,
      period: Period.Monthly,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.RoadTax,
      defaultValue: 1000,
      label: "Road tax",
      unit: ConditionUnit.Currency,
      period: Period.Annual,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.Energy,
      defaultValue: 1000,
      label: "Energy",
      unit: ConditionUnit.Currency,
      period: Period.Monthly,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.TVAndBroadband,
      defaultValue: 1000,
      label: "TV & Broadband",
      unit: ConditionUnit.Currency,
      period: Period.Monthly,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.Mobile,
      defaultValue: 1000,
      label: "Mobile",
      unit: ConditionUnit.Currency,
      period: Period.Monthly,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.OtherFixedCosts,
      defaultValue: 1000,
      label: "Other fixed costs",
      unit: ConditionUnit.Currency,
      period: Period.Monthly,
      conditionType: ConditionType.Initial,
    },
    {
      condition: Condition.VariableSpendingReduction,
      defaultValue: 0.02,
      label: "Variable spending reduction",
      unit: ConditionUnit.Percentage,
      period: Period.Annual,
      conditionType: ConditionType.Assumption,
    },
    {
      condition: Condition.SalaryIncrease,
      defaultValue: 0.04,
      label: "Salary increase",
      unit: ConditionUnit.Percentage,
      period: Period.Annual,
      conditionType: ConditionType.Assumption,
    },
    {
      condition: Condition.InterestOnSavings,
      defaultValue: 0.06,
      label: "Interest on savings",
      unit: ConditionUnit.Percentage,
      period: Period.Annual,
      conditionType: ConditionType.Assumption,
    },
    {
      condition: Condition.SafeWithdrawlRate,
      defaultValue: 0.04,
      label: "Safe withdrawal rate",
      unit: ConditionUnit.Percentage,
      period: Period.Annual,
      conditionType: ConditionType.Assumption,
    },
    {
      condition: Condition.VariableSpendingReductionWhenRetired,
      defaultValue: 0.2,
      label: "Spending reduction when retired",
      unit: ConditionUnit.Percentage,
      conditionType: ConditionType.Assumption,
    },
    {
      condition: Condition.SavingsShareInSIPP,
      defaultValue: 0.5,
      label: "Share of savings put in SIPP",
      unit: ConditionUnit.Percentage,
      conditionType: ConditionType.Assumption,
    },
    {
      condition: Condition.Inflation,
      defaultValue: 0.007,
      label: "Inflation",
      unit: ConditionUnit.Percentage,
      period: Period.Annual,
      conditionType: ConditionType.Assumption,
    },
    {
      condition: Condition.CapitalGainsTax,
      defaultValue: 0.2,
      label: "Capital gains tax",
      unit: ConditionUnit.Percentage,
      period: Period.Annual,
      conditionType: ConditionType.Assumption,
    },
    {
      condition: Condition.ISAAllowance,
      defaultValue: 20000,
      label: "ISA allowance",
      unit: ConditionUnit.Currency,
      period: Period.Annual,
      conditionType: ConditionType.Assumption,
    },
    {
      condition: Condition.PensionAllowance,
      defaultValue: 40000,
      label: "Pension allowance",
      unit: ConditionUnit.Currency,
      period: Period.Annual,
      conditionType: ConditionType.Assumption,
    },
  ];

  private static readonly MAP = new Map<Condition, ConditionMetadata>(
    Conditions.LIST.map((metadata) => [metadata.condition, metadata])
  );
}
