# Awakening co-citation keyword diagnosis

## Summary

Awakening co-citation keyword diagnosis is a method for interpreting a sleeping beauty's awakening by comparing co-cited papers and citing-paper title keywords before and after the awakening time.

## Canonical Form

- Unit of analysis: sleeping-beauty paper, awakening year, citing paper, co-cited paper, title keyword, or pre/post-awakening interval.
- Typical representation: co-citation neighborhood, keyword cloud, pre/post term-frequency comparison, or trigger-community map.
- Method target: move from delayed-recognition detection to candidate mechanism diagnosis.
- Empirical signature: the citing papers around or after awakening connect the dormant paper to new co-cited works, topics, or communities.

## Uses in Science of Science

- Operationalizes trigger analysis after estimating [awakening time](../measures/awakening_time.md).
- Complements [awakening trigger citation](../mechanisms/awakening_trigger_citation.md) by diagnosing communities and terms, not only a single first post-sleep citation.
- Supports [cross-disciplinary awakening](../mechanisms/cross_disciplinary_awakening.md) with evidence about the topical and citation context of renewed attention.
- Provides a reusable full-text or metadata-light workflow for delayed-recognition case studies.

## Operationalization

- Select high-[beauty coefficient](../measures/beauty_coefficient.md) papers and their awakening years.
- Split citing papers into pre-awakening and post-awakening windows.
- Identify highly co-cited papers around the focal sleeping beauty, especially near awakening.
- Compare frequent title keywords or citation contexts before and after awakening.
- Interpret candidate triggers as hypotheses requiring case-level reading, not as automatic causal proof.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) studies papers citing top sleeping beauties before and after awakening to ask what triggers the awakening.
- The paper illustrates the method with Garfield's 1955 citation-index paper, using co-cited papers and title keywords before and after 2000.
- Ke et al. identify later works on HITS, journal impact factor limitations, and related citation-index topics as contextual bridges for Garfield's awakening.
- The Garfield case is split as an [author-mediated awakening bridge](../mechanisms/author_mediated_awakening_bridge.md), because later same-author articles helped reconnect the dormant paper to active literatures.
- The paper also uses Zachary's karate-club paper as an example where a dormant social-network dataset became important after later community-detection work, split as [benchmark-mediated rediscovery](../mechanisms/benchmark_mediated_rediscovery.md).

## Caveats

- Co-citation and keyword changes suggest candidate mechanisms but do not prove causal triggering.
- Title keywords can miss methods, data uses, and citation functions expressed only in full text.
- Diagnosis depends on field labels, citation coverage, and the chosen pre/post windows.
- Multiple communities can contribute to the same awakening.

## Links

- [awakening time](../measures/awakening_time.md)
- [beauty coefficient](../measures/beauty_coefficient.md)
- [sleeping-beauty detection](sleeping_beauty_detection.md)
- [awakening trigger citation](../mechanisms/awakening_trigger_citation.md)
- [cross-disciplinary awakening](../mechanisms/cross_disciplinary_awakening.md)
- [author-mediated awakening bridge](../mechanisms/author_mediated_awakening_bridge.md)
- [benchmark-mediated rediscovery](../mechanisms/benchmark_mediated_rediscovery.md)
- [sleeping-beauty cross-dataset visibility](../validations/sleeping_beauty_cross_dataset_visibility.md)
- [citation contexts](../representations/citation_contexts.md)
- [co-citation strength](../measures/co_citation_strength.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `awakening_cocitation_keyword_diagnosis`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: awakening co-citation diagnosis; pre-post awakening keyword analysis; sleeping-beauty trigger diagnosis; delayed-recognition keyword shift
