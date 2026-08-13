# Continued access to retracted articles

## Summary

Continued access to retracted articles is the correction-policy method of keeping invalidated papers accessible while attaching clear, durable reason metadata and retraction warnings.

## Canonical Form

- Unit of analysis: retracted article, landing page, PDF, repository record, notice, metadata flag, or citation database record.
- Typical representation: retained article with watermark, linked notice, reason-code metadata, and machine-readable retraction status.
- Method target: preserve the scholarly record while making the correction state visible to readers, indexers, and downstream systems.
- Empirical signature: retracted articles remain reachable but are paired with prominent reason information and source provenance.

## Uses in Science of Science

- Connects [post-retraction citation persistence](../measures/post_retraction_citation_persistence.md) to interface and metadata design.
- Depends on [retraction notice transparency](../validations/retraction_notice_transparency.md), because access without clear reason metadata can increase ambiguity.
- Supports [retractions and scientific self-correction](../validations/retractions_self_correction.md) by treating correction as annotation rather than deletion.
- Gives [responsible metrics](../measures/responsible_metrics.md) a policy boundary: retracted work may remain historically useful while no longer supporting the original claim.

## Operationalization

- Keep the article landing page and metadata record available.
- Add visible retraction labels, watermarks, Crossmark-style status metadata, and bidirectional links between article and notice.
- Record cause, date, responsible source, and uncertainty when known.
- Distinguish full retraction, partial retraction, expression of concern, correction, and unresolved warning states.
- Audit whether downstream databases, PDFs, repositories, and citation managers preserve the retraction status.

## Evidence and Validations

- Verified full-text evidence from Fang, Steen, and Casadevall (2012) notes that scientists may continue to find utility in some retracted articles, especially those retracted because of error.
- The same paper supports continued access to retracted articles as long as detailed descriptions of the reasons for retraction are provided.
- This links access policy directly to notice-quality requirements: retained access is defensible only when the retraction state and reason travel with the article.

## Caveats

- Continued access can enable continued miscitation if warnings are hidden, stripped from PDFs, or not propagated to databases.
- Some retracted content may require stronger safeguards when it poses clinical, safety, or public-risk concerns.
- Access policy should distinguish scholarly record preservation from endorsement of the invalidated claims.

## Links

- [post-retraction citation persistence](../measures/post_retraction_citation_persistence.md)
- [retraction notice transparency](../validations/retraction_notice_transparency.md)
- [retractions and scientific self-correction](../validations/retractions_self_correction.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [time-to-retraction](../measures/time_to_retraction.md)
- [nonretraction integrity warning states](../validations/nonretraction_integrity_warning_states.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; SciSciNet: W2097110982; WoS: unknown]

## Metadata

- Concept ID: `continued_access_retracted_articles`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Dimensions ID: `pub.1035913875`
- SciSciNet ID: `W2097110982`
- Aliases: retained retracted article access; retracted article access policy; annotated retraction access; retraction watermark access
