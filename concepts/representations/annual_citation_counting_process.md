# Annual citation counting process

## Summary

A post-peak citation trajectory can be represented as yearly citation-event counts rather than only cumulative impact.

## Canonical Form

- Unit of analysis: paper, citation event, post-peak year, annual citation count, or non-citation state.
- Typical representation: annual counting process over post-peak citation events.
- Mechanism, measurement, or validation target: event representation for citation-decay modeling.
- Empirical signature: citations after the peak are modeled as a sequence of yearly events and non-events..

## Uses in Science of Science

- Refines citation-aging representation by linking it to [peak normalized citation trajectory](peak_normalized_citation_trajectory.md) and [peak year citation alignment](../methods/peak_year_citation_alignment.md).
- Useful as a reusable check when [citation decay model comparison](../methods/citation_decay_model_comparison.md) is interpreted from citation histories.
- Adds cross-links to [ultradiffusive citation decay](../mechanisms/ultradiffusive_citation_decay.md) so delayed-recognition and ranking motifs stay connected.

## Operationalization

- For each paper, take annual citations after the peak year as a counting process.
- Represent citation events and non-citation states before fitting decay models.
- Use the process representation to connect empirical annual counts to ultradiffusive assumptions.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) treats each citation as an event and the post-peak citation sequence as a counting process in the ultradiffusion section.
- The motif separates annual event histories from cumulative citation totals.

## Caveats

- Annual aggregation removes citation context, citer identity, and within-year timing.
- Event representation does not itself explain the mechanism of decay.

## Links

- [Peak-normalized citation trajectory](peak_normalized_citation_trajectory.md)
- [Peak-year citation alignment](../methods/peak_year_citation_alignment.md)
- [Citation decay model comparison](../methods/citation_decay_model_comparison.md)
- [Ultradiffusive citation decay](../mechanisms/ultradiffusive_citation_decay.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; SciSciNet: W1833467796; WoS: unknown]

## Metadata

- Concept ID: `annual_citation_counting_process`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: post-peak citation event process; yearly citation-event representation; annual citation incidence process
