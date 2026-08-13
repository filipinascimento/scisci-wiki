# Outside-domain reviewer indicator

## Summary

A binary outside-domain flag provides a coarse expertise-distance proxy before continuous knowledge-space distance is modeled.

## Canonical Form

- Unit of analysis: reviewer, disease domain, publication history, proposal, or expertise-distance flag.
- Typical representation: binary reviewer-domain status indicator linked to evaluator-proposal pairs.
- Mechanism, measurement, or validation target: coarse reviewer expertise position in frontier proposal evaluation.
- Empirical signature: outside-domain reviewers assign systematically different scores than inside-domain reviewers before finer distance measures are used.

## Uses in Science of Science

- Refines peer-review expertise measurement by linking it to [reviewer proposal intellectual distance](reviewer_proposal_intellectual_distance.md) and [stratified distance evaluator recruitment](../methods/stratified_distance_evaluator_recruitment.md).
- Useful as a reusable check when [within domain expertise heterogeneity](../mechanisms/within_domain_expertise_heterogeneity.md) is used in science-of-science inference.
- Creates cross-links to [coauthor bridge domain proximity check](../validations/coauthor_bridge_domain_proximity_check.md) so the motif is not interpreted in isolation.

## Operationalization

- Flag reviewers with no prior publications in the focal disease or topical domain.
- Compare this flag with continuous MeSH or topic-space distance measures.
- Use the indicator for stratified recruitment, robustness checks, or interaction models.

## Evidence and Validations

- Verified full-text evidence from Boudreau et al. (2016) defines `OUTSIDE_DOMAIN` for evaluators without endocrine-disease publications and reports that outside-domain evaluators scored proposals higher on average.
- The measure provides a coarse domain-boundary proxy for intellectual distance.

## Caveats

- The flag is disease-specific and coarse.
- It can miss nearby expertise from methods, collaborators, or adjacent specialties.

## Links

- [Reviewer-proposal intellectual distance](reviewer_proposal_intellectual_distance.md)
- [Stratified-distance evaluator recruitment](../methods/stratified_distance_evaluator_recruitment.md)
- [Within-domain expertise heterogeneity](../mechanisms/within_domain_expertise_heterogeneity.md)
- [Coauthor-bridge domain proximity check](../validations/coauthor_bridge_domain_proximity_check.md)
- [Reviewer-type interaction null](../validations/reviewer_type_interaction_null.md)
- [Biomedical frontier-review experiment](../datasets/biomedical_frontier_review_experiment.md)

## References

- Boudreau, K. J., Guinan, E. C., Lakhani, K. R., & Riedl, C. (2016). Looking across and looking beyond the knowledge frontier: Intellectual distance, novelty, and resource allocation in science. *Management Science*, 62(10), 2765-2783. https://doi.org/10.1287/mnsc.2015.2285 [OpenAlex: W3122634626; Dimensions: pub.1064718020; WoS: unknown]

## Metadata

- Concept ID: `outside_domain_reviewer_indicator`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Boudreau et al. (2016) (2016)
- Latest seen paper: Boudreau et al. (2016) (2016)
- Primary reference DOI: `10.1287/mnsc.2015.2285`
- OpenAlex ID: `W3122634626`
- Dimensions ID: `pub.1064718020`
- SciSciNet ID: `W3122634626`
- Aliases: outside-domain reviewer; disease-domain outsider; broad expertise-distance flag
