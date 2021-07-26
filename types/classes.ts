// TypeCurrent

enum ConditionUnit { Currency, Percentage, Years};
enum Period { Monthly, Annual};

interface ConditionMetadata {
    condition: Condition;
    defaultValue: number;
    label: string;
    unit: ConditionUnit,
    period?: Period
  }

  enum Condition {
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
      OtherFixedCosts
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
        period: Period.Monthly
      },
      {
        condition: Condition.HouseValue,
        defaultValue: 500000,
        label: "Total house value",
        unit: ConditionUnit.Currency
      },
       {
           condition: Condition.MortgageYearsLeft,
        defaultValue: 28,
        label: "Years left on mortgage",
        unit: ConditionUnit.Years
       },
       {
        condition: Condition.HouseMaintenance,
        defaultValue: 1000,
        label: "House maintenance",
        unit: ConditionUnit.Currency,
        period: Period.Annual
       },
       {
        condition: Condition.HomeInsurance,
        defaultValue: 500,
        label: "Home insurance",
        unit: ConditionUnit.Currency,
        period: Period.Annual
       },
       {condition: Condition.Salary,
        defaultValue: 0.02,
        label: "Salary after tax",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        condition: Condition.ISASavings,
        defaultValue: 1000,
        label: "Current ISA savings",
        unit: ConditionUnit.Currency
       },
       {
        condition: Condition.SIPPSavings,
        defaultValue: 1000,
        label: "Current SIPP savings",
        unit: ConditionUnit.Currency
       },
       {
        condition: Condition.PensionSavings,
        defaultValue: 1000,
        label: "Current pension savings",
        unit: ConditionUnit.Currency
       },
       {
        condition: Condition.MonthlySavings,
        defaultValue: 1000,
        label: "Current monthly savings",
        unit: ConditionUnit.Currency
       },
       {
        condition: Condition.PersonalPension,
        defaultValue: 0.02,
        label: "Personal pension contribution",
        unit: ConditionUnit.Percentage,
        period: Period.Monthly
       },
       {
        condition: Condition.EmployerPension,
        defaultValue: 0.05,
        label: "Employer pension contribution",
        unit: ConditionUnit.Percentage,
        period: Period.Monthly
       },
       {
        condition: Condition.Commute,
        defaultValue: 1000,
        label: "Commuting costs",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        condition: Condition.CouncilTax,
        defaultValue: 1000,
        label: "Council tax",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        condition: Condition.Water,
        defaultValue: 1000,
        label: "Water",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {condition: Condition.CarInsurance,
        defaultValue: 1000,
        label: "Car insurance",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        condition: Condition.RoadTax,
        defaultValue: 1000,
        label: "Road tax",
        unit: ConditionUnit.Currency,
        period: Period.Annual
       },
       {condition: Condition.Energy,
        defaultValue: 1000,
        label: "Energy",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        condition: Condition.TVAndBroadband,
        defaultValue: 1000,
        label: "TV & Broadband",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        condition: Condition.Mobile,
        defaultValue: 1000,
        label: "Mobile",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       },
       {
        condition: Condition.OtherFixedCosts,
        defaultValue: 1000,
        label: "Other fixed costs",
        unit: ConditionUnit.Currency,
        period: Period.Monthly
       }
      ]
      
      private static readonly MAP = new Map<Condition, ConditionMetadata>(
        Conditions.LIST.map(metadata => [metadata.condition, metadata])
      );
    }
