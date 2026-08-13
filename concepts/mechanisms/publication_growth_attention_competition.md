# Publication growth attention competition

## Summary

Publication growth attention competition is the mechanism by which rapid growth in the number of papers increases competition for finite scholarly attention, making older papers lose citation attention faster in calendar time.

## Canonical Form

- Unit of analysis: paper, field, topic, publication cohort, or citation opportunity pool.
- Typical representation: publication-volume growth curve linked to citation peak timing, decay rate, and half-life.
- Mechanism: finite attention must be allocated across a growing set of candidate papers, so more new publications accelerate turnover.
- Empirical signature: calendar-time citation half-life declines, but half-life measured in number of competing publications remains comparatively stable.

## Uses in Science of Science

- Explains why [citation aging and obsolescence](citation_aging_obsolescence.md) can intensify even if the underlying competition per new paper is stable.
- Connects [attention inequality](attention_inequality.md), [citation-volume growth normalization](../methods/citation_volume_growth_normalization.md), and [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md).
- Provides a mechanism for interpreting faster [time-to-peak attention](../measures/time_to_peak_attention.md) in newer publication cohorts.
- Interprets rising [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md) as a possible symptom of growing competition for finite attention.
- Needs [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md) checks because publication growth and attention turnover differ by field.
- Suggests experiments comparing calendar-time and publication-volume time in topical citation networks.

## Operationalization

- Estimate publication-volume growth by field or topic, preferably with a stable document-type and database filter.
- Measure citation trajectories, time-to-peak, fitted decay rates, and half-life in calendar time.
- Rescale post-peak time by the cumulative number of newly published field or topic papers.
- Test whether decay parameters or half-life trends flatten under publication-volume time.
- Compare broad-field rescaling with topic-specific rescaling when topic labels or citation-neighborhood data are available.
- Report [topic-specific attention-pool caveat](../validations/topic_specific_attention_pool_caveat.md) when only broad-field publication counts are used.

## Evidence and Validations

- Verified full-text evidence from Parolo et al. (2015) fits exponential publication growth in Clinical Medicine, Molecular Biology, Chemistry, Physics, and the full Web of Science panel.
- The paper reports that attention decays faster in calendar years for more recent papers, with fitted exponential decay rates increasing over peak years.
- Parolo et al. report that Physics and Chemistry show faster decay than Biology and Medicine, so the mechanism should be checked field by field.
- Average reference-list length partly compensates for larger publication volume, but the paper argues that attention remains limited and researchers must filter what to read and cite.
- When half-life is rescaled by the number of field publications appearing after a paper's peak, the temporal trend becomes relatively stable.
- The paper concludes that papers are forgotten faster in real time because scientific output grows, while the number of new papers a focal paper can withstand before obsolescence is roughly stable.
- Parolo et al. also caution that broad-field publication counts are a simple denominator and that topic-specific relevant literature would often be preferable.

## Caveats

- Publication volume is an exposure proxy, not a direct measure of cognitive attention.
- The relevant competition set is often topical, whereas field-level publication counts are coarse.
- Digital search, recommender systems, open access, and changing reference-list norms can alter attention allocation without changing publication counts alone.

## Links

- [publication-volume-rescaled half-life](../measures/publication_volume_rescaled_half_life.md)
- [paper attention half-life](../measures/paper_attention_half_life.md)
- [time-to-peak attention](../measures/time_to_peak_attention.md)
- [citation decay-rate alpha](../measures/citation_decay_rate_alpha.md)
- [field-specific attention-decay gradient](../validations/field_specific_attention_decay_gradient.md)
- [peak-normalized citation trajectory](../representations/peak_normalized_citation_trajectory.md)
- [citation-volume growth normalization](../methods/citation_volume_growth_normalization.md)
- [topic-specific attention-pool caveat](../validations/topic_specific_attention_pool_caveat.md)
- [citation aging and obsolescence](citation_aging_obsolescence.md)
- [attention inequality](attention_inequality.md)
- [electronic access citation narrowing](electronic_access_citation_narrowing.md)
- [WoS attention-decay panel](../datasets/wos_attention_decay_panel.md)

## References

- Parolo, P. D. B., Pan, R. K., Ghosh, R., Huberman, B. A., Kaski, K., & Fortunato, S. (2015). Attention decay in science. *Journal of Informetrics*, 9(4), 734-745. https://doi.org/10.1016/j.joi.2015.07.006 [OpenAlex: W1833467796; Dimensions: pub.1042909490; WoS: unknown]

## Metadata

- Concept ID: `publication_growth_attention_competition`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Parolo et al. (2015) (2015)
- Latest seen paper: Parolo et al. (2015) (2015)
- Primary reference DOI: `10.1016/j.joi.2015.07.006`
- OpenAlex ID: `W1833467796`
- Dimensions ID: `pub.1042909490`
- SciSciNet ID: `W1833467796`
- Aliases: finite attention publication growth; publication-volume competition; scholarly attention crowding; paper turnover mechanism
