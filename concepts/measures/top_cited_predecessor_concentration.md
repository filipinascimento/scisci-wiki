# Top-cited predecessor concentration

## Summary

Top-cited predecessor concentration measures the share of references or patent citations that point to the most highly cited prior works in a field or technology category.

## Canonical Form

- Unit of analysis: focal paper, patent, reference list, field-year, technology-category-year, or cited-work percentile group.
- Typical representation: share of references to the top 1 percent of cited predecessors, elite-predecessor share, or cited-work concentration curve.
- Measurement target: reliance on already visible or canonical prior work.
- Empirical signature: rising concentration of references among highly cited predecessors over time.

## Uses in Science of Science

- Refines [reference-popularity search](reference_popularity_search.md) from median predecessor popularity to elite-predecessor concentration.
- Operationalizes the concentration component of [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md).
- Connects [attention inequality](../mechanisms/attention_inequality.md), [citation elite concentration](citation_elite_concentration.md), and [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md).
- Helps distinguish broad use of many predecessors from repeated use of the same famous works.

## Operationalization

- Define cited-work citation counts before the focal year to avoid future leakage.
- Within each field-year or technology-category-year, identify the top cited percentile, often the top 1 percent.
- For each focal cohort, compute the share of citations going to that elite predecessor set.
- Pair the measure with semantic diversity or category diversity to test whether elite predecessors are becoming more topically similar.
- Normalize for changes in reference-list length and database coverage.

## Evidence and Validations

- Verified full-text evidence from Park et al. (2023) reports that declining diversity of cited work is accompanied by an increase in the share of citations to the 1 percent most highly cited papers and patents.
- The paper computes these measures within field and year before averaging across fields.
- Park et al. interpret rising concentration in top-cited predecessors as evidence that scientists and inventors increasingly cite the same prior work.
- The same analysis pairs this concentration trend with declining semantic diversity among the top-cited predecessors.

## Caveats

- Highly cited predecessors can be genuinely foundational, not merely fashionable.
- Percentile thresholds depend on field-year size and citation database coverage.
- Concentration can rise mechanically if reference lists expand around common review articles, methods, or data resources.

## Links

- [reference-popularity search](reference_popularity_search.md)
- [cited work diversity](cited_work_diversity.md)
- [cited predecessor semantic diversity](cited_predecessor_semantic_diversity.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [attention inequality](../mechanisms/attention_inequality.md)
- [citation elite concentration](citation_elite_concentration.md)
- [disruption index](disruption_index.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `top_cited_predecessor_concentration`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: top 1 percent predecessor share; elite predecessor concentration; highly cited reference concentration; canonical predecessor share
