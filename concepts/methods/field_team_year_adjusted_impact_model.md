# Field-Team-Year Adjusted Impact Model

## Summary

Field-team-year adjusted impact model estimates collaboration impact while accounting for field, team size, and publication year differences.

## Canonical Form

- Unit of analysis: paper, field-year, team-size bin, authorship structure, or institution pair.
- Typical representation: regression or stratified model of above-baseline citation impact.
- Method target: compare collaboration structures without conflating them with field, year, or team-size composition.
- Empirical signature: an estimated collaboration coefficient after conditioning on subfield, team size, and publication year.

## Uses in Science of Science

- Provides the estimation layer for [between-school impact premium](../mechanisms/between_school_impact_premium.md).
- Uses [field-year mean high-citation flag](../measures/field_year_mean_high_citation_flag.md) as a comparable outcome.
- Connects [authorship structure taxonomy](../measures/authorship_structure_taxonomy.md) to citation-impact modeling.

## Operationalization

- Define the outcome as whether a paper exceeds the mean citation impact in its field and year.
- Include indicators for authorship structure such as solo, within-school, or between-school collaboration.
- Adjust for publication year, team size, and subfield.
- Cluster uncertainty by field or subfield when observations share field-level conditions.

## Evidence and Validations

- Verified full-text evidence from Jones et al. (2008) estimates the probability that within-school and between-school papers receive above-average citations.
- The paper accounts for subfield, team size, and publication year differences.
- Notes specify linear probability models with standard errors clustered by subfield.

## Caveats

- Citation means can be sensitive to skewness and field classification.
- Team size can be both a confounder and part of the collaboration mechanism.
- Regression adjustment does not eliminate selection into high-impact partnerships.

## Links

- [between-school impact premium](../mechanisms/between_school_impact_premium.md)
- [field-year mean high-citation flag](../measures/field_year_mean_high_citation_flag.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [authorship structure taxonomy](../measures/authorship_structure_taxonomy.md)
- [team-size conditioned boundary-crossing propensity](../measures/team_size_conditioned_boundary_crossing_propensity.md)

## References

- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; SciSciNet: W2096523843; WoS: unknown]

## Metadata

- Concept ID: `field_team_year_adjusted_impact_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Jones et al. (2008) (2008)
- Latest seen paper: Jones et al. (2008) (2008)
- Primary reference DOI: `10.1126/science.1158357`
- OpenAlex ID: `W2096523843`
- Dimensions ID: `pub.1062457759`
- SciSciNet ID: `W2096523843`
- Aliases: subfield-team-year impact adjustment; collaboration impact regression; above-mean citation probability model; field-year team-size control
