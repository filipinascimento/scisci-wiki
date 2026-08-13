# Ultrametric event-distance representation

## Summary

Ultrametric event-distance representation encodes post-peak citation events by a recency-based distance to the terminal event, enabling ultradiffusive attention-decay models.

## Canonical Form

- Unit of analysis: citation event, post-peak citation sequence, paper, or normalized trajectory.
- Typical representation: event distance defined by shared recency structure rather than ordinary calendar distance.
- Measurement target: long-memory or hierarchical decay in attention after peak citation.
- Empirical signature: post-peak citation decay is better captured by an ultradiffusive form than by simple exponential or power-law alternatives.

## Uses in Science of Science

- Provides the technical representation under [ultradiffusive citation decay](../mechanisms/ultradiffusive_citation_decay.md).
- Supports [citation decay model comparison](../methods/citation_decay_model_comparison.md).
- Works with [peak-normalized citation trajectory](peak_normalized_citation_trajectory.md) and [peak-year citation alignment](../methods/peak_year_citation_alignment.md).
- Connects scientific attention to transferable models of collective attention.

## Operationalization

- Align citation trajectories by peak year.
- Normalize annual citation counts by each paper's peak annual citation count.
- Define post-peak event distance using the ultrametric structure specified by the decay model.
- Compare ultradiffusive fits against exponential, log-normal, and power-law alternatives.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) adapts ultradiffusion models from online collective-attention systems to post-peak citation histories.
- The paper defines an ultrametric distance representation for citation events and uses it to fit broad-field citation decay.
- Model comparison favors the ultradiffusive form in several field and cohort settings, motivating the representation as more than a plotting convention.

## Caveats

- The representation is model-specific and may be opaque to non-specialist users.
- Sparse citation trajectories can make individual-paper fits unstable.
- Good fit does not by itself identify the social mechanism behind attention decay.

## Links

- [ultradiffusive citation decay](../mechanisms/ultradiffusive_citation_decay.md)
- [citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [peak-normalized citation trajectory](peak_normalized_citation_trajectory.md)
- [peak-year citation alignment](../methods/peak_year_citation_alignment.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; SciSciNet: W1833467796; WoS: unknown]

## Metadata

- Concept ID: `ultrametric_event_distance_representation`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: ultrametric citation-event distance; recency tree event distance; ultradiffusive event representation
