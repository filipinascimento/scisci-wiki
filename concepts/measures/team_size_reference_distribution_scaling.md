# Team-size reference-distribution scaling

## Summary

Team-size reference-distribution scaling measures how the age and popularity distributions of cited predecessors change with the number of people on a team.

## Canonical Form

- Unit of analysis: reference, focal paper, team size, reference age, reference popularity, or fitted distribution parameter.
- Typical representation: team-size-specific exponential decay for reference age and power-law scaling for reference popularity.
- Measure target: move from average reference age or median popularity to fitted distributional differences by team size.
- Empirical signature: smaller teams draw more deeply from older and less popular predecessors, while larger teams cite more recent and visible work.

## Uses in Science of Science

- Refines [reference-age search depth](reference_age_search_depth.md) and [reference-popularity search](reference_popularity_search.md) with distributional parameters.
- Gives [team-size breadth-depth search tradeoff](../mechanisms/team_size_breadth_depth_search_tradeoff.md) a fitted-reference-distribution signature.
- Connects team-size research to [citation distribution scaling](citation_distribution_scaling.md).

## Operationalization

- Compute reference age as focal publication year minus cited work year.
- Compute reference popularity from prior citation counts or other predecessor-attention measures.
- Fit age-decay and popularity-tail models separately by team-size bin.
- Compare fitted parameters across team sizes after field and year controls.
- Validate that the pattern is not driven by missing references or discipline-specific citation norms.

## Evidence and Validations

- Verified full-text evidence from Wu et al. (2019) models reference age with an exponential decay parameter that varies by team size.
- The same analysis models reference popularity with a power-law parameter that varies by team size.
- These fitted distributions support the claim that small and large teams search different regions of prior knowledge.

## Caveats

- Distributional fits can be sensitive to citation-window truncation and database coverage.
- Reference popularity is endogenous to field size, age, and citation practices.
- Team size may proxy for field, resource intensity, or document type if controls are weak.

## Links

- [reference-age search depth](reference_age_search_depth.md)
- [reference-popularity search](reference_popularity_search.md)
- [team-size breadth-depth search tradeoff](../mechanisms/team_size_breadth_depth_search_tradeoff.md)
- [team size and disruption](../mechanisms/team_size_disruption.md)
- [citation distribution scaling](citation_distribution_scaling.md)

## References

- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; SciSciNet: W2913773162; WoS: unknown]

## Metadata

- Concept ID: `team_size_reference_distribution_scaling`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wu et al. (2019) (2019)
- Latest seen paper: Wu et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41586-019-0941-9`
- OpenAlex ID: `W2913773162`
- Dimensions ID: `pub.1112085796`
- SciSciNet ID: `W2913773162`
- Aliases: team-size reference age scaling; team-size reference popularity scaling; reference distribution by team size; team search distribution parameters
