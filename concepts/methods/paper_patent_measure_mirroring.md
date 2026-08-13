# Paper-patent measure mirroring

## Summary

Paper-patent measure mirroring applies parallel metrics, taxonomies, and robustness checks to scientific papers and patents so science and technology trends can be compared under matched operational logic.

## Canonical Form

- Unit of analysis: paper, patent, field, technology category, citation network, text record, or trend estimate.
- Typical representation: paired paper-patent metric table, mirrored robustness stack, field-technology taxonomy crosswalk, or parallel trend panel.
- Method target: compare science and technology without changing measurement logic across output classes.
- Empirical signature: the same disruption, diversity, text, or citation-use measures are computed separately for papers and patents.

## Uses in Science of Science

- Supports [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md) as a cross-output claim.
- Links paper evidence to technology evidence through [patent-paper links](../datasets/patent_paper_links.md) and patent citation data.
- Extends [cross-corpus disruptiveness replication](../validations/cross_corpus_disruptiveness_replication.md) from source robustness to output-class comparability.
- Helps compare scientific and technological knowledge-use narrowing under matched methods.

## Operationalization

- Define analogous analytic windows for papers and patents.
- Select comparable field or technology taxonomies for trend aggregation.
- Compute the same citation-network measures, text measures, and knowledge-use covariates in each output class.
- Report paper and patent sample sizes, citation coverage, title or abstract availability, and follow-up windows.
- Run parallel robustness checks before interpreting cross-domain similarity or divergence.

## Evidence and Validations

- Verified full-text evidence from Park, Leahey, and Funk (2023) analyzes 45 million papers and 3.9 million patents, then replicates core findings on additional paper datasets.
- Their main results display declines in CD5 separately for papers by Web of Science research area and patents by NBER technology category.
- Their knowledge-use analysis mirrors diversity of cited work, self-citations, cited-work age, and semantic diversity for both papers and patents.

## Caveats

- Papers and patents differ in citation incentives, examiner citations, legal norms, and time to impact.
- Field and technology categories are not exact analogues.
- Mirrored metrics improve comparability but do not prove the same causal mechanism operates in both systems.

## Links

- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [cross-corpus disruptiveness replication](../validations/cross_corpus_disruptiveness_replication.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [science-technology distance](../measures/science_technology_distance.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [postwar analytic-window guardrail](postwar_analytic_window_guardrail.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; SciSciNet: W4313545395; WoS: unknown]

## Metadata

- Concept ID: `paper_patent_measure_mirroring`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: mirrored paper-patent metrics; science-technology measure mirroring; parallel paper-patent robustness; output-class matched measurement
