# Within-individual boundary impact validation

## Summary

Within-individual boundary impact validation compares a scientist's or inventor's boundary-adjacent outputs with their other outputs to test whether boundary proximity predicts impact within the same person.

## Canonical Form

- Unit of analysis: author, inventor, paper, patent, D=1 output, or individual fixed effect.
- Typical representation: person fixed-effect regression or within-person impact comparison.
- Validation target: reduce selection concerns that boundary impact premiums only reflect high-ability people working near the boundary.
- Empirical signature: D=1 papers or patents are more likely to be high-impact even within an individual's output portfolio.

## Uses in Science of Science

- Validates [scientist-inventor boundary spanning](../mechanisms/scientist_inventor_boundary_spanning.md) without only comparing different people.
- Strengthens [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md).
- Uses [citation percentile indicators](../measures/citation_percentile_indicators.md) for within-person impact comparisons.

## Operationalization

- Construct author and inventor identifiers.
- Estimate impact models with individual fixed effects.
- Compare D=1 outputs with the same person's non-D=1 connected outputs.
- Run the analysis separately for papers and patents when both person types are available.

## Evidence and Validations

- Verified full-text evidence from Ahmadpoor and Jones (2017) reports that D=1 patents and papers are more likely to be home runs within a given inventor's or author's outputs.
- The supplementary methods describe individual fixed-effect regressions for inventors and authors.
- The supplement also examines boundary-spanning cases where the same person is inventor and author.

## Caveats

- Author and inventor disambiguation quality affects the fixed-effect comparison.
- Individual fixed effects do not remove project-level selection.
- Boundary status can correlate with team, institution, or field choices within the same career.

## Links

- [scientist-inventor boundary spanning](../mechanisms/scientist_inventor_boundary_spanning.md)
- [patent-paper boundary impact premium](../mechanisms/patent_paper_boundary_impact_premium.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [institutional pathways to the frontier](../representations/institutional_pathways_to_frontier.md)
- [science-technology distance](../measures/science_technology_distance.md)

## References

- Ahmadpoor, M., & Jones, B. F. (2017). The dual frontier: Patented inventions and prior scientific advance. *Science*, 357(6351), 583-587. https://doi.org/10.1126/science.aam9527 [OpenAlex: W2743628650; Dimensions: pub.1091201170; SciSciNet: W2743628650; WoS: unknown]

## Metadata

- Concept ID: `within_individual_boundary_impact_validation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ahmadpoor and Jones (2017) (2017)
- Latest seen paper: Ahmadpoor and Jones (2017) (2017)
- Primary reference DOI: `10.1126/science.aam9527`
- OpenAlex ID: `W2743628650`
- Dimensions ID: `pub.1091201170`
- SciSciNet ID: `W2743628650`
- Aliases: individual fixed-effect boundary impact; within-author D1 impact validation; within-inventor boundary premium check; person-level dual-frontier impact audit
