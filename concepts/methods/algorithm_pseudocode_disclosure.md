# Algorithm pseudocode disclosure

## Summary

Algorithm pseudocode disclosure is the practice of publishing a metric algorithm's mathematical description and procedural recipe so users can audit how scores are produced.

## Canonical Form

- Unit of analysis: metric algorithm, ranking method, scoring pipeline, or evaluation product.
- Typical representation: pseudocode, formula appendix, method page, or reproducible algorithm recipe.
- Method target: make the transformation from data to score inspectable.
- Empirical signature: independent readers can reconstruct the scoring logic without relying only on final rankings.

## Uses in Science of Science

- Operationalizes [transparent metric construction](transparent_metric_construction.md) for algorithmic indicators.
- Strengthens [metric accessibility and component disclosure](metric_accessibility_and_component_disclosure.md).
- Creates an audit hook for [commercial metric provider accountability](../validations/commercial_metric_provider_accountability.md).
- Supports scrutiny of [journal citation random walks](journal_citation_random_walk.md) and other recursive network metrics.

## Operationalization

- Publish formulas, initialization rules, stopping criteria, and edge-case handling.
- Provide pseudocode or executable code when possible.
- Tie the algorithm description to the dataset version used to produce scores.
- Record differences between explanatory pseudocode and production implementation.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) points to the Eigenfactor algorithm's mathematical description and pseudocode recipe.
- The article describes the algorithm as an extension of eigenvector centrality and PageRank-like random walks.
- It also reports practical computation on the JCR-scale journal network, making the disclosed recipe operational rather than purely conceptual.

## Caveats

- Pseudocode alone may omit preprocessing, matching, and data-cleaning choices.
- Proprietary implementations can diverge from public algorithm descriptions.
- Transparent algorithms can still encode invalid assumptions.

## Links

- [transparent metric construction](transparent_metric_construction.md)
- [metric accessibility and component disclosure](metric_accessibility_and_component_disclosure.md)
- [commercial metric provider accountability](../validations/commercial_metric_provider_accountability.md)
- [journal citation random walks](journal_citation_random_walk.md)
- [algorithmic scalability feasibility claim](../validations/algorithmic_scalability_feasibility_claim.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003; WoS: unknown]

## Metadata

- Concept ID: `algorithm_pseudocode_disclosure`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: metric pseudocode disclosure; algorithm recipe transparency; scoring-method disclosure
