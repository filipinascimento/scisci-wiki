# Retraction status-marking failure

## Summary

Retraction status-marking failure occurs when article pages, PDFs, databases, or citation tools do not clearly mark a retracted work as retracted.

## Canonical Form

- Unit of analysis: article landing page, PDF, database record, citation manager record, repository copy, or retraction notice link.
- Typical representation: binary or graded audit of whether retraction status is visible at each access point.
- Validation target: whether readers and downstream systems can detect that a cited article has been invalidated.
- Empirical signature: different versions of the same paper differ in how clearly they display retraction status.

## Uses in Science of Science

- Narrows [continued access to retracted articles](../methods/continued_access_retracted_articles.md) into a concrete interface and metadata failure mode.
- Helps explain [post-retraction citation persistence](../measures/post_retraction_citation_persistence.md).
- Gives [retraction notice transparency](retraction_notice_transparency.md) a distribution channel requirement: the warning must travel with the article.
- Links correction policy to citation-database and repository quality.

## Operationalization

- Check publisher HTML, publisher PDF, repository copies, PubMed records, Crossref status, and citation-manager exports.
- Code whether the retraction marker is visible, linked, machine-readable, and present in downloaded files.
- Record whether the reason for retraction is accessible from the marked item.
- Audit highly cited retracted papers and papers with continued post-retraction citation.
- Track status propagation over time after the notice is issued.

## Evidence and Validations

- Verified full-text evidence from Fang, Steen, and Casadevall (2012) compares retracted articles whose PDFs or HTML clearly indicate retraction with cases where the PDF version does not show the status.
- The paper uses this variation to discuss why some retracted work may continue to be cited or used.
- This motif treats status marking as a validation layer between retraction policy and downstream reader behavior.

## Caveats

- Some post-retraction citations are critical or historical and should not be treated automatically as failures.
- Legacy PDFs and repository copies can persist even after publishers update landing pages.
- Machine-readable status is necessary but not sufficient if user interfaces hide the warning.

## Links

- [continued access to retracted articles](../methods/continued_access_retracted_articles.md)
- [post-retraction citation persistence](../measures/post_retraction_citation_persistence.md)
- [retraction notice transparency](retraction_notice_transparency.md)
- [retractions and scientific self-correction](retractions_self_correction.md)
- [time-to-retraction](../measures/time_to_retraction.md)

## References

- Fang, F. C., Steen, R. G., & Casadevall, A. (2012). Misconduct accounts for the majority of retracted scientific publications. *Proceedings of the National Academy of Sciences*, 109(42), 17028-17033. https://doi.org/10.1073/pnas.1212247109 [OpenAlex: W2097110982; Dimensions: pub.1035913875; SciSciNet: W2097110982; WoS: unknown]

## Metadata

- Concept ID: `retraction_status_marking_failure`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Fang et al. (2012) (2012)
- Latest seen paper: Fang et al. (2012) (2012)
- Primary reference DOI: `10.1073/pnas.1212247109`
- OpenAlex ID: `W2097110982`
- Dimensions ID: `pub.1035913875`
- SciSciNet ID: `W2097110982`
- Aliases: retraction warning failure; PDF retraction marker gap; article status propagation failure; retraction label visibility audit
