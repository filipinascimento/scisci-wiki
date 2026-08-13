# Citation-index alerting service

## Summary

Citation-index alerting service uses citation links to notify researchers about recent work by peers, colleagues, or tightly connected research-front papers.

## Canonical Form

- Unit of analysis: researcher, paper, citation link, research front, alert query, or citation index update.
- Typical representation: citation-based current-awareness feed, cited-by alert, co-citation alert, or research-front watchlist.
- Method target: help scientists follow active fronts where new papers are tightly linked to recent work.
- Empirical signature: alerts are triggered by new citations, new papers in a front, or new links to a user's known papers and topics.

## Uses in Science of Science

- Translates [research fronts](../mechanisms/research_fronts.md) into a practical current-awareness workflow.
- Builds on [citation-index research infrastructure](../datasets/citation_index_research_infrastructure.md) and [citation networks](../representations/citation_networks.md).
- Provides an early functional motivation for citation indexes beyond retrospective impact counting.
- Connects alert design to modern recommender and search systems such as [citation-aware search and summarization](citation_aware_search_summarization.md).

## Operationalization

- Maintain an updated citation index with new papers, references, and cited-by links.
- Define user profiles from authored papers, followed papers, journals, keywords, or citation neighborhoods.
- Trigger alerts when new papers cite followed work, are cited by followed work, or enter a user's research-front neighborhood.
- Allow filtering by field, recency, citation context, document type, and source coverage.
- Evaluate alerts by relevance, timeliness, novelty, and missed important papers.

## Evidence and Validations

- Verified full-text evidence from Price (1965) argues that the citation network reveals two different bibliographic needs.
- For active research fronts, Price states that scientists need an alerting service to keep them posted on the work of peers and colleagues, probably through citation indexing.
- The paper contrasts this current-awareness need with the archival need for taxonomic organization, books, and stable classifications.
- Price's argument makes citation indexing a navigation tool for active fronts, not only a data source for retrospective counts.
- The same text links alerting to a broader [citation topography strips](../representations/citation_topography_strips.md) view in which current fronts are small, shifting, strategically positioned strips.

## Caveats

- Citation-based alerts can reinforce visibility and cumulative advantage by showing work already connected to known networks.
- Alerts may miss relevant uncited, new, or interdisciplinary papers that have not yet entered the citation graph.
- Current implementations should combine citation links with text, author, topic, and user-feedback signals.

## Links

- [research fronts](../mechanisms/research_fronts.md)
- [citation-index research infrastructure](../datasets/citation_index_research_infrastructure.md)
- [citation networks](../representations/citation_networks.md)
- [research-front citation share](../measures/research_front_citation_share.md)
- [citation topography strips](../representations/citation_topography_strips.md)
- [citation-aware search and summarization](citation_aware_search_summarization.md)
- [online scholarly recommender A/B tests](../validations/online_scholarly_recommender_ab_tests.md)
- [Semantic Scholar citation triplet corpus](../datasets/semantic_scholar_citation_triplet_corpus.md)
- [forced-browsing serendipity](../mechanisms/forced_browsing_serendipity.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]

## Metadata

- Concept ID: `citation_index_alerting_service`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Price (1965) (1965)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: citation alerting; citation-index current awareness; research-front alerting; cited-by alert service
