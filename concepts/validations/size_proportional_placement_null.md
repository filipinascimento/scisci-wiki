# Size-proportional placement null

## Summary

The size-proportional placement null tests whether institutional faculty production can be explained by the size of the hiring unit alone, rather than by differential placement success or prestige.

## Canonical Form

- Unit of analysis: institution, department, faculty production count, faculty hiring count, field, or placement distribution.
- Typical representation: size-proportional expected placements, Kolmogorov-Smirnov comparison, production-versus-size distribution test, or production-margin null.
- Validation target: distinguish unequal faculty production from simple differences in department or school size.
- Empirical signature: production counts are more unequal than expected if placements were proportional only to institution size.

## Uses in Science of Science

- Provides a specific null model for [faculty production inequality](../measures/faculty_production_inequality.md).
- Complements broader [faculty hiring null models](../methods/faculty_hiring_null_models.md) by testing whether production margins themselves exceed size-based expectations.
- Supports [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md) by showing that placement inequality is not just a mechanical result of larger units placing more graduates.
- Helps interpret [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md) and [faculty placement rank change](../measures/faculty_placement_rank_change.md).

## Operationalization

- Count faculty produced and faculty hired for each institution in the field-specific hiring network.
- Construct the expected production distribution under the hypothesis that production is proportional to institutional faculty size.
- Compare observed production and size distributions using a declared test such as KS, simulation, or likelihood comparison.
- Report whether size differences explain the observed concentration of faculty production.
- Pair this null with rewired placement-network nulls when testing hierarchy.

## Evidence and Validations

- Verified full-text evidence from Clauset, Arbesman, and Larremore (2015) observes that both faculty production and unit size are skewed across computer science, business, and history.
- The paper states that if placements were simply proportional to unit size, placement and size distributions would be statistically indistinguishable.
- Clauset et al. reject the size-proportional placement hypothesis with a KS test at `P < 10^-8`, concluding that differences in size cannot explain observed placement differences.
- The same evidence motivates treating faculty production inequality as a genuine placement-success pattern rather than only a department-size artifact.

## Caveats

- Unit size is itself an outcome of historical prestige, resources, and field structure.
- The test does not identify which mechanisms create production inequality.
- Size measurement can vary across schools, departments, ranks, and field definitions.

## Links

- [faculty production inequality](../measures/faculty_production_inequality.md)
- [faculty hiring null models](../methods/faculty_hiring_null_models.md)
- [faculty hiring networks](../representations/faculty_hiring_networks.md)
- [faculty hierarchy strength](../measures/faculty_hierarchy_strength.md)
- [faculty placement rank change](../measures/faculty_placement_rank_change.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)

## References

- Clauset, A., Arbesman, S., & Larremore, D. B. (2015). Systematic inequality and hierarchy in faculty hiring networks. *Science Advances*, 1(1), e1400005. https://doi.org/10.1126/sciadv.1400005 [OpenAlex: W2102017123; Dimensions: pub.1028625291; WoS: unknown]

## Metadata

- Concept ID: `size_proportional_placement_null`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2015) (2015)
- Latest seen paper: Clauset et al. (2015) (2015)
- Primary reference DOI: `10.1126/sciadv.1400005`
- OpenAlex ID: `W2102017123`
- Dimensions ID: `pub.1028625291`
- SciSciNet ID: `W2102017123`
- Aliases: size-proportional faculty production null; department-size placement null; faculty production size test; placement-size null model
