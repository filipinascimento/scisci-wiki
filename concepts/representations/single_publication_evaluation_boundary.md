# Single-publication evaluation boundary

## Summary

Individual publications are the minimal unit where field-normalized impact can be tested before aggregation to authors, groups, or institutions.

## Canonical Form

- Unit of analysis: publication, normalized citation score, author aggregate, institution aggregate, or evaluation unit.
- Typical representation: article-first evaluation boundary before higher-level aggregation.
- Mechanism, measurement, or validation target: unit-of-analysis discipline for normalized citation indicators.
- Empirical signature: paper-level normalization is interpretable before additional author, group, or institution biases are introduced.

## Uses in Science of Science

- Refines citation indicator unit of analysis by linking it to [paper first normalization before aggregation](../methods/paper_first_normalization_before_aggregation.md) and [field normalized citation impact](../measures/field_normalized_citation_impact.md).
- Useful as a reusable check when [mean normalized citation score](../measures/mean_normalized_citation_score.md) is used in science-of-science inference.
- Creates cross-links to [field normalized h index](../measures/field_normalized_h_index.md) so the motif is not interpreted in isolation.

## Operationalization

- Define article-level normalized impact before aggregating to actors or organizations.
- Aggregate only after normalization and document the aggregation rule.
- State which new biases enter when moving from papers to authors, groups, institutions, or countries.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) frames single publications as the simplest impact-measurement entities and warns that author or group evaluation adds bias.
- The boundary supports paper-first normalization before actor-level summaries.

## Caveats

- This is a boundary concept and should not replace the operational aggregation rule.
- Paper-level impact still inherits field, year, citation-window, and source-coverage assumptions.

## Links

- [Paper-first normalization before aggregation](../methods/paper_first_normalization_before_aggregation.md)
- [Field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [Mean normalized citation score](../measures/mean_normalized_citation_score.md)
- [Field-normalized h-index](../measures/field_normalized_h_index.md)
- [Citation-normalization residual-bias stack](../validations/citation_normalization_residual_bias_stack.md)
- [Author productivity distribution collapse](../validations/author_productivity_distribution_collapse.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `single_publication_evaluation_boundary`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: article-level evaluation boundary; publication-as-impact-unit; minimal bibliometric evaluation unit
