# Altmetric actor-motive annotation

## Summary

Altmetric actor-motive annotation is the method motif that online attention events should be annotated by who shared a paper and why before being interpreted as scholarly, educational, professional, or public impact.

## Canonical Form

- Unit of analysis: altmetric event, actor, platform account, motive, mention function, or audience type.
- Typical representation: researcher mention, student bookmark, practitioner share, public discussion, motive code, or event-context label.
- Method target: make altmetric meaning interpretable beyond raw event counts.
- Empirical signature: identical source counts can imply different forms of impact depending on actor identity and mention purpose.

## Uses in Science of Science

- Extends [social-web non-citing reader traces](../mechanisms/social_web_non_citing_reader_traces.md).
- Connects to [altmetric event context metadata](../datasets/altmetric_event_context_metadata.md).
- Supports [altmetric meaning validation gap](../validations/altmetric_meaning_validation_gap.md) by supplying event-level interpretation.

## Operationalization

- Classify actor type, institutional role, platform, motive, mention function, and effort level.
- Use text, profile metadata, network context, or manual coding where feasible.
- Track uncertainty and privacy constraints in actor labels.
- Aggregate counts by meaning category rather than platform alone.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) argues that interpreting altmetrics requires understanding who shares papers and why, including students, researchers, practitioners, and wider publics.
- The paper closes by calling for better understanding of the kinds of impact represented by different online events.

## Caveats

- Actor labels can be incomplete, privacy-sensitive, and platform-dependent.
- Motives are often ambiguous from short posts.
- Event-level annotation can be expensive at scale.

## Links

- [social-web non-citing reader traces](../mechanisms/social_web_non_citing_reader_traces.md)
- [altmetric event context metadata](../datasets/altmetric_event_context_metadata.md)
- [altmetric meaning validation gap](../validations/altmetric_meaning_validation_gap.md)
- [altmetric source collection-mode heterogeneity](altmetric_source_collection_mode_heterogeneity.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `altmetric_actor_motive_annotation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: altmetric actor coding; online mention motive annotation; social attention event interpretation
