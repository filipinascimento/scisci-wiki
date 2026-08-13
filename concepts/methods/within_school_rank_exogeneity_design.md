# Within-School Rank Exogeneity Design

## Summary

Within-school rank exogeneity design ranks institutions using only within-institution outputs before testing cross-institution collaboration outcomes, reducing leakage between the status measure and the collaboration effect being estimated.

## Canonical Form

- Unit of analysis: institution, institution tier, paper, collaboration pair, field, or time period.
- Typical representation: institution ranking derived from within-school solo or same-school papers.
- Method target: construct institutional prestige tiers that are independent of between-school collaboration performance.
- Empirical signature: collaboration-impact estimates are less mechanically tied to the rank variable used to define tier pairings.

## Uses in Science of Science

- Provides a leakage guardrail for [university tier mixing matrix](../representations/university_tier_mixing_matrix.md).
- Supports cleaner estimation of [between-school impact premium](../mechanisms/between_school_impact_premium.md).
- Complements [institution citation-rank proxy](../measures/institution_citation_rank_proxy.md) by specifying how to keep the rank source separate from the tested outcome.

## Operationalization

- Rank each institution using only papers that are wholly produced inside that institution.
- Exclude between-school papers from the ranking input before assigning tiers.
- Estimate collaboration impact or mixing patterns on the held-out between-school papers.
- Recompute results with alternative rank proxies as a robustness check.

## Evidence and Validations

- Verified full-text evidence from Jones et al. (2008) ranks schools by citations to within-school publications and excludes between-school collaborations from the tier-assignment measure.
- The paper states that this ranking choice makes the school ranks independent of between-school collaboration performance.
- Notes in the full text specify that alternative ranking methods were considered as robustness checks.

## Caveats

- Within-school output can still reflect institution-level resources, field mix, and past collaboration histories.
- The design reduces leakage; it does not make institution rank exogenous to all unobserved determinants of collaboration.
- Small institutions or narrow fields may have unstable within-school citation counts.

## Links

- [institution citation-rank proxy](../measures/institution_citation_rank_proxy.md)
- [university tier mixing matrix](../representations/university_tier_mixing_matrix.md)
- [between-school impact premium](../mechanisms/between_school_impact_premium.md)
- [random tier matching baseline](../validations/random_tier_matching_baseline.md)
- [university rank-proxy robustness check](../validations/university_rank_proxy_robustness_check.md)

## References

- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; SciSciNet: W2096523843; WoS: unknown]

## Metadata

- Concept ID: `within_school_rank_exogeneity_design`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Jones et al. (2008) (2008)
- Latest seen paper: Jones et al. (2008) (2008)
- Primary reference DOI: `10.1126/science.1158357`
- OpenAlex ID: `W2096523843`
- Dimensions ID: `pub.1062457759`
- SciSciNet ID: `W2096523843`
- Aliases: within-school rank exclusion; collaboration-leakage rank design; independent tier assignment; within-institution prestige proxy
