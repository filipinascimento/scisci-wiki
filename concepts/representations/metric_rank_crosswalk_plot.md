# Metric rank crosswalk plot

## Summary

Metric rank crosswalk plot connects the same entities across two ranking lists so metric-dependent rank shifts and non-overlap become visible.

## Canonical Form

- Unit of analysis: journal, author, institution, field, paper, indicator, rank, or top-k list.
- Typical representation: two-column paired-rank plot, slopegraph, line-crossing diagram, or top-k overlap visualization.
- Representation target: show how conclusions change when an evaluation switches indicators.
- Empirical signature: entities move up, move down, disappear, or enter the top-k set across metric orderings.

## Uses in Science of Science

- Visualizes [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md).
- Helps communicate [indicator false precision](../validations/indicator_false_precision.md) by showing rank instability.
- Applies to PageRank-like metrics, citation means, field-normalized indicators, altmetrics, and composite scores.

## Operationalization

- Select two metrics, a shared entity set, and a fixed evaluation year or snapshot.
- Rank entities under each metric using the same inclusion rules.
- Draw lines connecting each entity's rank across the two lists and mark entities absent from one top-k list.
- Annotate major shifts with plausible metric assumptions such as citation window, source prestige, field density, or self-citation treatment.
- Report top-k overlap and rank correlation alongside the visual.

## Evidence and Validations

- Verified full-text evidence from West, Bergstrom, and Bergstrom (2010) compares economics journals ranked by impact factor with journals ranked by Article Influence Score.
- Their display connects the two ranked lists and marks journals that appear in one ranking but not the other, making large rank movements visually inspectable.
- The representation supports the paper's broader argument that different journal metrics can produce materially different evaluation conclusions.

## Caveats

- Rank plots can exaggerate small numerical differences when entities have similar scores.
- Top-k cutoffs hide changes outside the displayed range.
- Visual rank movement identifies metric sensitivity but does not identify which metric is more valid for a specific evaluation.

## Links

- [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md)
- [journal metric divergence decomposition](../methods/journal_metric_divergence_decomposition.md)
- [indicator false precision](../validations/indicator_false_precision.md)
- [PageRank damping sensitivity](../validations/pagerank_damping_sensitivity.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [Article Influence Score](../measures/article_influence_score.md)
- [journal impact factor](../measures/journal_impact_factor.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003; WoS: unknown]

## Metadata

- Concept ID: `metric_rank_crosswalk_plot`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: paired metric rank plot; ranking crosswalk; metric slopegraph; top-k rank divergence plot
