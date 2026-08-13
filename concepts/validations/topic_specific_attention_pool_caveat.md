# Topic-specific attention-pool caveat

## Summary

Topic-specific attention-pool caveat is the warning that broad field publication counts are only a coarse denominator for attention competition because scientists mainly compete for attention within narrower topic-relevant literatures.

## Canonical Form

- Unit of analysis: field publication pool, topic, paper, citation neighborhood, subject category, or publication-volume rescaling denominator.
- Typical representation: broad-field denominator caveat, topic-level rescaling proposal, citation-neighborhood exposure pool, or relevant-literature sensitivity check.
- Validation target: whether publication-volume normalization uses the appropriate pool of papers competing for attention.
- Empirical signature: broad-field rescaling removes much of the calendar-time trend, but residual patterns or interpretation caveats remain because topics are more local than fields.

## Uses in Science of Science

- Adds a denominator-validity layer to [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md).
- Refines [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md) by distinguishing field-wide growth from topic-local competition.
- Links attention-decay studies to [field classifications](../measures/field_classifications.md), [co-citation network field definition](../representations/co_citation_network_field_definition.md), and topic modeling.
- Provides a design target for future replication with OpenAlex or Dimensions topic clusters.

## Operationalization

- Start with broad-field publication-volume rescaling as a baseline.
- Recompute exposure pools using narrower subject categories, topics, citation neighborhoods, co-citation clusters, or embedding clusters.
- Compare whether half-life or decay-rate trends remain stable under each denominator.
- Report denominator scope, document types, language coverage, and database coverage.
- Treat broad-field results as conservative or approximate when topic-specific pools cannot be isolated.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) concludes that decay appears approximately stable over time when time is measured by number of published works.
- The authors explicitly caution that they normalize time by the number of papers in the broad discipline under study because it is the simplest choice.
- They state that the broad fields are subdivided into many topics and that scholars are affected mostly by literature from their own topic.
- Parolo et al. note that isolating the relevant literature case by case is difficult, but that broad-field publication counts still counterbalance much of the apparent faster decay.

## Caveats

- Topic-specific denominators require reliable and time-stable topic definitions.
- Citation neighborhoods can be endogenous to the same attention dynamics being measured.
- Very narrow topics can create sparse denominator series and unstable half-life estimates.
- Broad-field and topic-level denominators may answer different questions rather than one simply replacing the other.

## Links

- [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md)
- [publication growth attention competition](../mechanisms/publication_growth_attention_competition.md)
- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)
- [field classifications](../measures/field_classifications.md)
- [co-citation network field definition](../representations/co_citation_network_field_definition.md)
- [topic models](../methods/topic_models.md)
- [citation-volume growth normalization](../methods/citation_volume_growth_normalization.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `topic_specific_attention_pool_caveat`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: attention-pool denominator caveat; topic-level publication pool; relevant-literature denominator; field-to-topic rescaling caveat
