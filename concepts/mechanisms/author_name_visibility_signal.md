# Author name visibility signal

## Summary

Author name visibility signal is the mechanism by which a recognizable scientist name or accumulated author record serves as a credibility cue when readers evaluate new work under uncertainty.

## Canonical Form

- Unit of analysis: author, reader, paper, citation event, search result, review decision, or career stage.
- Typical representation: visible author name joined to cumulative citations, prior publications, affiliation, awards, media presence, or profile visibility.
- Mechanism: when intrinsic paper quality is costly to assess, the author's visible reputation becomes a shortcut for attention, trust, and citation.
- Empirical signature: new or low-cited papers by highly visible authors receive more early attention after accounting for paper age and prior paper citations.

## Uses in Science of Science

- Provides a signaling mechanism for [reputation effects](reputation_effects.md) and [status-authority evaluation bias](status_authority_evaluation_bias.md).
- Interprets [cumulative author reputation](../measures/cumulative_author_reputation.md) as name-association visibility rather than intrinsic paper quality.
- Connects author-level citation histories to [citation impact indicators](../measures/citation_impact_indicators.md), [Google Scholar](../datasets/google_scholar.md), and online profile visibility.
- Motivates blinding, audit, or interface experiments when visible names may bias attention or evaluation.
- Provides the reader-selection cue inside [recognition-visibility coupling](recognition_visibility_coupling.md) when [article readership reach rate](../measures/article_readership_reach_rate.md) is low.
- Gains a behavioral source in [elite publication selectivity signal](elite_publication_selectivity_signal.md), where eminent scientists' self-filtering makes their names stronger attention cues.

## Operationalization

- Measure author visibility with cumulative citations, prior publications, profile metrics, media mentions, awards, affiliation status, or search-rank prominence.
- Model early paper attention or review outcomes while controlling for paper topic, age, venue, prior paper citations, and field.
- Distinguish author-name visibility from paper-specific evidence by estimating effects before the paper has accumulated its own citation history.
- Pair citation-based visibility with [author name disambiguation](../methods/author_name_disambiguation.md) and self-citation checks.

## Evidence and Validations

- Verified full-text evidence from Merton (1968) identifies author reputation as a selection cue under publication overload.
- Merton links that cue to low article readership reach: when scientists can inspect only a tiny fraction of the literature, recognized names affect which communications are noticed and read.
- The same evidence is a historical root for later quantitative models that treat author reputation as a visibility and trust signal.
- Verified full-text evidence from Petersen et al. (2014) describes reputation as a trustworthiness or quality signal that helps readers handle asymmetric and incomplete information.
- The paper argues that readers often inspect author names because publication volume is high and time to evaluate each paper is limited.
- Petersen et al. interpret cumulative author citations as a measure of how often an author's name appears in the literature, not as a direct measure of intrinsic quality.
- The paper also notes that searchable databases, websites, press, media, and citation counts increase the visibility of author names.

## Caveats

- A visible name can be an informative prior, but it can also create unfair attention or evaluation advantages.
- Citation-based visibility conflates productivity, field size, coauthor status, self-citation, and past impact.
- Blinding can reduce name visibility but may leave topic, citation-context, and institutional cues.

## Links

- [reputation effects](reputation_effects.md)
- [recognition-visibility coupling](recognition_visibility_coupling.md)
- [elite publication selectivity signal](elite_publication_selectivity_signal.md)
- [status-authority evaluation bias](status_authority_evaluation_bias.md)
- [article readership reach rate](../measures/article_readership_reach_rate.md)
- [cumulative author reputation](../measures/cumulative_author_reputation.md)
- [reputation citation premium](reputation_citation_premium.md)
- [reputation effect citation model](../methods/reputation_effect_citation_model.md)
- [search-result reputation reinforcement](search_result_reputation_reinforcement.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [Google Scholar](../datasets/google_scholar.md)
- [peer review and gatekeeping](peer_review_gatekeeping.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Merton, R. K. (1968). The Matthew effect in science. *Science*, 159(3810), 56-63. https://doi.org/10.1126/science.159.3810.56 [OpenAlex: W4292887282; Dimensions: pub.1062493069; WoS: unknown]
- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `author_name_visibility_signal`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Merton (1968) (1968)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: name-association visibility; author visibility cue; reputation as quality signal; visible author status
