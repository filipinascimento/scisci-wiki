# Top-k metric membership exclusion

## Summary

Top-k metric membership exclusion is a paired-ranking representation that marks entities present in one metric's top list but absent from another metric's corresponding list.

## Canonical Form

- Unit of analysis: ranked list, journal category, paper set, author list, or institutional ranking.
- Typical representation: paired top-k table, greyed exclusion marker, rank crosswalk, or membership difference list.
- Representation target: show both rank movement and list-entry displacement.
- Empirical signature: some entities are not merely re-ranked but excluded from one top-k set entirely.

## Uses in Science of Science

- Refines [metric rank crosswalk plot](metric_rank_crosswalk_plot.md).
- Adds list-membership evidence to [dual metric field annotated rank table](dual_metric_field_annotated_rank_table.md).
- Supports [ranking correlation diagnostic](../validations/ranking_correlation_diagnostic.md).
- Helps communicate [indicator false precision](../validations/indicator_false_precision.md) when lists appear authoritative.

## Operationalization

- Select a fixed k and a shared entity universe.
- Generate top-k lists under two metrics.
- Mark entities missing from the opposite top-k list.
- Report both rank movement and membership exclusion.

## Evidence and Validations

- Verified full-text evidence from West et al. (2010) compares top Economics journal lists under impact factor and Article Influence.
- The figure marks journals that appear in one top-35 list but not the other.
- The paper uses examples such as Health Economics to show that the issue is list membership, not only within-list rank position.

## Caveats

- Top-k cutoffs can exaggerate small differences near the boundary.
- Membership exclusion depends on category definitions and list size.
- The representation should not be read without score differences or uncertainty.

## Links

- [metric rank crosswalk plot](metric_rank_crosswalk_plot.md)
- [dual metric field annotated rank table](dual_metric_field_annotated_rank_table.md)
- [ranking correlation diagnostic](../validations/ranking_correlation_diagnostic.md)
- [indicator false precision](../validations/indicator_false_precision.md)
- [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A network approach to assessing scholarly journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003; WoS: unknown]

## Metadata

- Concept ID: `top_k_metric_membership_exclusion`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: top-k membership divergence; top-list exclusion marker; paired ranking membership gap
